import { Organisasi_Type } from "@prisma/client";
import { notFound } from "next/navigation";

import { findOrganisasi } from "@/utils/database/organisasi.query";
import { findPeriod } from "@/utils/database/period.query";

export default async function OrganisasiByPeriod({
  param,
}: {
  param: { slug: string; period: string };
}) {
  const period = await findPeriod(param.period);
  if (!period) return notFound();

  const organisasi = await findOrganisasi({
    organisasi_period_id: {
      organisasi: param.slug.toUpperCase() as Organisasi_Type,
      period_id: period.id,
    },
  });
  console.log(organisasi);

  return <></>;
}
