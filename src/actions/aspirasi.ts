"use server";

import { Organisasi_Type, UnitSekolah } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createAspiration } from "@/utils/database/aspiration.query";

export type aspirationType = "PILIH" | "ORGANISASI" | "SEKOLAH" | "EVENT";

export async function submitAspiration(
  data: FormData,
  userId: string,
  pesan_aspirasi: string,
  type: aspirationType,
  recipent: string,
) {
  const judul_aspirasi = (data.get("judulAspirasi") as string) || "";
  try {
    await createAspiration({
      judul_aspirasi,
      organisasi:
        type === "ORGANISASI"
          ? (recipent?.toUpperCase() as Organisasi_Type)
          : undefined,
      event: type === "EVENT" ? { connect: { id: recipent } } : undefined,
      unit_sekolah:
        type === "SEKOLAH"
          ? (recipent?.toUpperCase() as UnitSekolah)
          : undefined,
      pesan_aspirasi,
      user: {
        connect: {
          id: userId,
        },
      },
    });

    revalidatePath("/admin/aspirasi");
    return {
      success: true,
      message: "Berhasil mengirimkan aspirasi!",
    };
  } catch (e) {
    return {
      success: false,
      message: "Gagal mengirimkan aspirasi!",
    };
  }
}
