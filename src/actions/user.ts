"use server";

import { Roles } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { nextGetServerSession } from "@/lib/next-auth";
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
} from "@/utils/database/user.query";
import { encrypt } from "@/utils/encryption";

export const updateUserWithId = async (id: string | null, data: FormData) => {
  try {
    const session = await nextGetServerSession();
    if (session?.user?.role != "SuperAdmin")
      return { error: true, message: "Unauthorized" };

    const email = data.get("email") as string;
    const name = data.get("name") as string;
    const role = data.get("role") as Roles;
    const password = data.get("password") as string;

    const findEmail = await findUser({ email });

    if (id == null && !findEmail) {
      const create = await createUser({
        email,
        name,
        role,
        user_pic:
          "https://res.cloudinary.com/mokletorg/image/upload/f_auto,q_auto/user",
        userAuth: {
          create: { password: password ? encrypt(password) : undefined },
        },
      });
      if (!create) throw new Error("Update failed");
    } else if (id) {
      const findUserWithId = await findUser({ id });
      if (findUserWithId) {
        const update = await updateUser(
          { id: id ?? findUserWithId.id },
          {
            email: email ?? findUserWithId.email,
            name: name ?? findUserWithId.name,
            role: role ?? findUserWithId.role,
            userAuth: {
              update: { password: password ? encrypt(password) : undefined },
            },
          },
        );
        if (!update) throw new Error("Update failed");
      } else throw new Error("Update failed");
    }

    revalidatePath("/admin/users");
    return { message: "Berhasil disimpan!", error: false };
  } catch (e) {
    console.error(e);
    const error = e as Error;
    return {
      message: error.message.includes("PRIMARY")
        ? "Email sudah ada!"
        : "Gagal mengubah user",
      error: true,
    };
  }
};

export const deleteUserById = async (id: string) => {
  try {
    const session = await nextGetServerSession();
    if (session?.user?.role != "SuperAdmin")
      return { error: true, message: "Unauthorized" };

    const del = await deleteUser(id);

    if (!del) throw new Error("Delete failed");

    revalidatePath("/admin/users");
    return { message: "Berhasil dihapus!", error: false };
  } catch (e) {
    console.error(e);
    return {
      message: "Gagal menghapus user",
      error: true,
    };
  }
};
