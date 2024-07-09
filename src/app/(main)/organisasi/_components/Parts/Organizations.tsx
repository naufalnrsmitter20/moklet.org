import { ReactElement } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import { OrganizationWithPeriod } from "@/types/entityRelations";
import { findAllPeriod } from "@/utils/database/periodYear.query";
import { Organisasi } from "@prisma/client";
import OrganizationSection from "../OrganizationSection";
import PeriodSelect from "../PeriodSelect";

export interface Suborgan {
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface SuborganSection {
  sectionName: string;
  sectionDesc: string;
  sectionLogo: ReactElement;
  sectionOrgans: Organisasi[];
}

export default async function Organizations({
  period,
  data,
}: {
  period: string;
  data: OrganizationWithPeriod[];
}) {
  const periods = (await findAllPeriod()).map((periods) => ({
    label: periods.period.replace(/-/, "/"),
    value: periods.period,
  }));

  periods.sort((a, b) => {
    return parseInt(b.value.split("-")[0]) - parseInt(a.value.split("-")[0]);
  });

  const organ = data.filter((a) => {
    return !a.is_suborgan;
  });

  const subOrgan = data.filter((a) => {
    return a.is_suborgan;
  });

  const organizations: SuborganSection[] = [
    {
      sectionName: "Organisasi",
      sectionLogo: <FaGlobe className="w-[42px] h-[42px]" />,
      sectionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
      sectionOrgans: organ,
    },
    {
      sectionName: "Sub-organisasi",
      sectionLogo: <FaUserGroup className="w-[42px] h-[42px]" />,
      sectionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
      sectionOrgans: subOrgan,
    },
  ];

  return (
    <div className="pt-[60px] md:pt-0">
      <PeriodSelect period={period} periods={periods} />
      {organizations.map((org) => (
        <OrganizationSection data={org} key={org.sectionName} period={period} />
      ))}
    </div>
  );
}
