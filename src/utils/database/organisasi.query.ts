import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findOrganisasis = async (filter?: Prisma.OrganisasiWhereInput) => {
  return await prisma.organisasi.findMany({
    where: filter,
    orderBy: { created_at: "desc" },
  });
};

export const findOrganisasi = async (
  filter: Prisma.OrganisasiWhereUniqueInput,
) => {
  return await prisma.organisasi.findUnique({ where: filter });
};

export const createOrganisasi = async (data: Prisma.OrganisasiCreateInput) => {
  return await prisma.organisasi.create({ data });
};

export const updateOrganisasi = async (
  where: Prisma.OrganisasiWhereUniqueInput,
  data: Prisma.OrganisasiUpdateInput,
) => {
  return await prisma.organisasi.update({ where, data });
};

export const deleteOrganisasi = async (
  filter: Prisma.OrganisasiWhereUniqueInput,
) => {
  return await prisma.organisasi.delete({ where: filter });
};
