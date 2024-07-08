import React from "react";

import { H2, P } from "@/app/_components/global/Text";

import AddPeriod from "./_components/AddPeriod";
import PeriodTable from "./_components/Table";
import { findAllPeriodOrganization } from "@/utils/database/periodYear.query";
import { PeriodWithOrganisasi } from "@/types/entityRelations";

export default async function PeriodPage() {
  const users: PeriodWithOrganisasi[] = await findAllPeriodOrganization({});
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <H2 className="font-semibold">Period Config</H2>
          <P>Set active period</P>
        </div>
        <AddPeriod />
      </div>
      <PeriodTable data={users} />
    </div>
  );
}
