import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findSubOrgans = async (filter?: Prisma.Sub_OrganWhereInput) => {
  return await prisma.sub_Organ.findMany({
    where: filter,
    orderBy: { created_at: "desc" },
  });
};

export const findSubOrgan = async (
  filter: Prisma.Sub_OrganWhereUniqueInput,
) => {
  return await prisma.sub_Organ.findUnique({ where: filter });
};

export const createSubOrgan = async (data: Prisma.Sub_OrganCreateInput) => {
  return await prisma.sub_Organ.create({ data });
};

export const updateSubOrgan = async (
  where: Prisma.Sub_OrganWhereUniqueInput,
  data: Prisma.Sub_OrganUpdateInput,
) => {
  return await prisma.sub_Organ.update({ where, data });
};

export const deleteSubOrgan = async (
  filter: Prisma.Sub_OrganWhereUniqueInput,
) => {
  return await prisma.sub_Organ.delete({ where: filter });
};
