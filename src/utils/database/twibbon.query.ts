import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findAllTwibbon = async (filter?: Prisma.TwibbonWhereInput) => {
  return await prisma.twibbon.findMany({
    where: filter,
    include: { user: true },
  });
};

export const findTwibbon = async (filter: Prisma.TwibbonWhereInput) => {
  return await prisma.twibbon.findFirst({
    where: filter,
    include: { user: true },
  });
};

export const createTwibbon = async (
  data: Prisma.TwibbonUncheckedCreateInput,
) => {
  return await prisma.twibbon.create({ data });
};

export const updateTwibbon = async (
  where: Prisma.TwibbonWhereUniqueInput,
  update: Prisma.TwibbonUncheckedUpdateInput,
) => {
  return await prisma.twibbon.update({ where, data: update });
};

export const deleteTwibbon = async (id: string, user_id?: string) => {
  return await prisma.twibbon.delete({ where: { id, user_id } });
};
