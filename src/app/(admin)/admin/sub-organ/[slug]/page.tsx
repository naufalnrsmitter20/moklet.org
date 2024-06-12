import { Organisasi_Type } from "@prisma/client";

import { findOrganisasi } from "@/utils/database/organisasi.query";
import { findLatestPeriod } from "@/utils/database/period.query";

export default async function Edit({
  params,
}: {
  params: { organisasi: string };
}) {
  const latestPeriod = await findLatestPeriod();
  const organisasi = await findOrganisasi({
    organisasi_period_id: {
      period_id: latestPeriod.id,
      organisasi: params.organisasi as Organisasi_Type,
    },
  });

  console.log(organisasi);

  return <></>;
}
