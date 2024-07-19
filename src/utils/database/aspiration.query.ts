import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findAllAspirations = async (
  filter?: Prisma.AspirasiWhereInput,
) => {
  return await prisma.aspirasi.findMany({
    where: filter,
    orderBy: { created_at: "desc" },
    include: { user: true },
  });
};

export const findAspiration = async (
  filter: Prisma.AspirasiWhereUniqueInput,
) => {
  return await prisma.aspirasi.findUnique({
    where: filter,
    include: { user: true, event: true },
  });
};

export const createAspiration = async (data: Prisma.AspirasiCreateInput) => {
  return await prisma.aspirasi.create({ data });
};
