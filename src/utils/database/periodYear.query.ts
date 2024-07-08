import { Organisasi_Type, Period_Year, Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findLatestPeriod = async () => {
  const latestPeriodYear = await prisma.period_Year.findMany({});

  latestPeriodYear.sort((a, b) => {
    return parseInt(b.period.split("/")[0]) - parseInt(a.period.split("/")[0]);
  });

  return latestPeriodYear[0] as Period_Year;
};

export const findAllPeriod = async (filter?: Prisma.Period_YearWhereInput) => {
  return await prisma.period_Year.findMany({
    where: filter,
  });
};

export const findAllPeriodOrganization = async (
  filter?: Prisma.Period_YearWhereInput,
) => {
  return await prisma.period_Year.findMany({
    where: filter,
    include: { organisasis: { select: { organisasi: true, id: true } } },
  });
};

export const findPeriod = async (filter: Prisma.Period_YearWhereInput) => {
  return await prisma.period_Year.findFirst({
    where: filter,
    include: { organisasis: true },
  });
};

export const findPeriodWithoutOrganisasi = async (
  filter: Prisma.Period_YearWhereInput,
) => {
  return await prisma.period_Year.findFirst({
    where: filter,
  });
};

export const createPeriod = async (
  data: Prisma.Period_YearUncheckedCreateInput,
) => {
  return await prisma.period_Year.create({ data });
};

export const updatePeriod = async (
  where: Prisma.Period_YearWhereUniqueInput,
  update: Prisma.Period_YearUncheckedUpdateInput,
) => {
  return await prisma.period_Year.update({ where, data: update });
};

export const deletePeriod = async (id: string) => {
  return await prisma.period_Year.delete({ where: { id } });
};
