import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findSubOrgans = async (filter?: Prisma.SuborganWhereInput) => {
  return await prisma.suborgan.findMany({
    where: filter,
    orderBy: { created_at: "desc" },
  });
};

export const findSubOrgan = async (filter: Prisma.SuborganWhereUniqueInput) => {
  return await prisma.suborgan.findUnique({ where: filter });
};

export const createSubOrgan = async (data: Prisma.SuborganCreateInput) => {
  return await prisma.suborgan.create({ data });
};

export const updateSubOrgan = async (
  where: Prisma.SuborganWhereUniqueInput,
  data: Prisma.SuborganUpdateInput,
) => {
  return await prisma.suborgan.update({ where, data });
};

export const deleteSubOrgan = async (
  filter: Prisma.SuborganWhereUniqueInput,
) => {
  return await prisma.suborgan.delete({ where: filter });
};
