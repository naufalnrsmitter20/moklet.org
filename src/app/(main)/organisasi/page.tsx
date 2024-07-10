import Maintenance from "@/app/maintenance/page";
import { findLatestPeriod } from "@/utils/database/periodYear.query";
import { redirect } from "next/navigation";

export default async function OrganisasiPage() {
  let activePeriod = await findLatestPeriod(true);

  if (!activePeriod) return <Maintenance />;

  return redirect(`/organisasi/${activePeriod.period}`);
}
