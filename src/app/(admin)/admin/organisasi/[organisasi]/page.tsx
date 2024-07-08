import { findLatestPeriod } from "@/utils/database/periodYear.query";
import { redirect } from "next/navigation";

export default async function Edit({
  params,
}: {
  params: { organisasi: string };
}) {
  const latestPeriod = await findLatestPeriod();
  if (latestPeriod)
    return redirect(
      `/admin/organisasi/${params.organisasi}/${latestPeriod.period}`,
    );

  return <></>;
}
