import { Period_Year } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findLatestPeriod = async () => {
  const currentYear = new Date().getFullYear();
  // Period year format example: 2023/2024
  const latestPeriodYear = await prisma.period_Year.findUnique({
    where: { period: `${currentYear}/${currentYear + 1}` },
  });

  return latestPeriodYear as Period_Year;
};

export const findPeriod = async (period: string) => {
  const periodYear = await prisma.period_Year.findUnique({ where: { period } });
  return periodYear;
};
