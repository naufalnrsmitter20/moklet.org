"use server";
import { updateUser } from "@/utils/database/user.query";
import { Roles } from "@prisma/client";

export const updateUserWithId = async (form: FormData, id: string) => {
  updateUser({ id: id }, { role: form.get("role") as Roles });
};
