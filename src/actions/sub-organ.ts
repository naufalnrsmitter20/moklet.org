"use server";

import { Prisma, Suborgan_Type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { MultiValue } from "react-select";

import { createSubOrgan } from "@/utils/database/subOrgan.query";

import { imageUploader } from "./fileUploader";

export async function createPeriod(inputValue: string) {
  try {
    const period = await prisma.period_Year.create({
      data: { period: inputValue },
    });
    revalidatePath("/admin/sub-organ/create");
    return { status: "OK", message: "Period berhasil dibuat!", period };
  } catch (e) {
    console.log(e);
    return { error: true, message: "Gagal membuat periode!" };
  }
}

export async function suborganCreate(
  data: FormData,
  periods: MultiValue<{ value: string; label: string }>,
) {
  try {
    const image = data.get("image") as File;
    const logo = data.get("logo") as File;
    const imageBuffer = await image.arrayBuffer();
    const logoBuffer = await logo.arrayBuffer();
    const uploadImage = await imageUploader(Buffer.from(imageBuffer));
    const uploadLogo = await imageUploader(Buffer.from(logoBuffer));
    const period: Prisma.Period_YearCreateOrConnectWithoutSuborganInput[] =
      periods.map((period) => ({
        where: { period: period.value },
        create: { period: period.value },
      }));

    await createSubOrgan({
      suborgan: data.get("suborgan") as Suborgan_Type,
      description: data.get("description") as string,
      image: uploadImage.data?.url as string,
      logo: uploadLogo.data?.url as string,
      suborgan_name: data.get("suborgan_name") as string,
      vision: data.get("vision") as string,
      mission: data.get("mission") as string,
      companion: data.get("companion") as string,
      structure: data.get("structure") as string,
      contact: data.get("contact") as string,
      periods: { connectOrCreate: period },
      start_date: data.get("start_date") as string,
    });
  } catch (e) {
    console.log(e);
    return { error: true, message: "Gagal menambahkan Sub-Organ Profile" };
  }
}
