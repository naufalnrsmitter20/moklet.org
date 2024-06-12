import { Period_Year } from "@prisma/client";

import prisma from "@/lib/prisma";

export const findLatestPeriod = async () => {
  const currentYear = new Date().getFullYear();
  // Period year format example: 2023/2024
  const latestPeriod = await prisma.period_Year.findUnique({
    where: { period: `${currentYear}/${currentYear + 1}` },
  });

  return latestPeriod as Period_Year;
};
