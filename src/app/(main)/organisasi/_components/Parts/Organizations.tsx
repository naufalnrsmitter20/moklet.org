import { ReactElement } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import { SectionWrapper } from "@/app/_components/global/Wrapper";
import OrganizationSection from "../OrganizationSection";
import { SelectField } from "@/app/_components/global/Input";
import { findAllPeriod } from "@/utils/database/periodYear.query";
import { redirect } from "next/navigation";
import PeriodSelect from "../PeriodSelect";
import { OrganizationWithPeriod } from "@/types/entityRelations";
import Link from "next/link";
import { H2, H4, P } from "@/app/_components/global/Text";
import Image from "@/app/_components/global/Image";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { Organisasi } from "@prisma/client";

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
      sectionLogo: <FaGlobe />,
      sectionDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus quis urna gravida. Quis ultrices arcu consequat. Praesent aliquet ante molestie faucibus facilisis. Integer fermentum, sapien ac.",
      sectionOrgans: organ,
    },
    {
      sectionName: "Sub-organisasi",
      sectionLogo: <FaUserGroup />,
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
