import Maintenance from "@/app/maintenance/page";
import {
  findLatestPeriod,
  findPeriodWithoutOrganisasi,
} from "@/utils/database/periodYear.query";
import { redirect } from "next/navigation";

export default async function OrganisasiPage() {
  let activePeriod = await findPeriodWithoutOrganisasi({ is_active: true });

  if (!activePeriod) {
    activePeriod = await findLatestPeriod();
  }

  if (!activePeriod) return <Maintenance />;

  return redirect(`/organisasi/${activePeriod.period}`);
}
