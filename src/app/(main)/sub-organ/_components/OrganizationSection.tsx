import Link from "next/link";
import { ReactElement } from "react";

import Image from "@/app/_components/global/Image";
import { H2, H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";

export interface organs {
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface organSections {
  sectionName: string;
  sectionDesc: string;
  sectionLogo: ReactElement;
  sectionOrgans: organs[];
}

export default function OrganizationSection({ data }: { data: organSections }) {
  return (
    <SectionWrapper id={data.sectionName} key={data.sectionName}>
      <div className="flex gap-[62px] justify-between">
        <div className="w-[512px] flex flex-col gap-7">
          <div className="flex gap-[22px] items-center">
            <div className="bg-primary-50 rounded-full w-[62px] h-[62px] p-[19px] flex items-center justify-center">
              {data.sectionLogo}
            </div>
            <H2>{data.sectionName}</H2>
          </div>
          <P>{data.sectionDesc}</P>
        </div>
        <div className="w-[618px] flex flex-col gap-[18px]">
          {data.sectionOrgans.map((organ) => (
            <Link
              className="w-full rounded-xl border p-[22px] border-neutral-400 flex items-center justify-between gap-[42px] group transition-all hover:border-neutral-500 duration-300"
              href={`/sub-organ/${organ.name}`}
              key={organ.name}
            >
              <div className="flex items-center gap-[26px]">
                <Image
                  alt={organ.name}
                  src={organ.image}
                  width={62}
                  height={62}
                  unoptimized
                />
                <div className="flex flex-col gap-[6px]">
                  <H4>{organ.name}</H4>
                  <P>{organ.desc}</P>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1/4 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
