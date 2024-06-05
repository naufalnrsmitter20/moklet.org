import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findSubOrgans = async (filter?: Prisma.Sub_OrganWhereInput) => {
  return await prisma.sub_Organ.findMany({
    where: filter,
    orderBy: { created_at: "desc" },
  });
};
