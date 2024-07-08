"use client";

import { SelectField } from "@/app/_components/global/Input";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { useRouter } from "next-nprogress-bar";

export default function PeriodSelect({
  periods,
  period,
}: {
  periods: {
    value: string;
    label: string;
  }[];
  period: string;
}) {
  const router = useRouter();

  return (
    <SmallSectionWrapper id="selector" className="pb-0">
      <SelectField
        options={periods}
        value={period}
        handleChange={(e) => {
          router.push(`/organisasi/${e.currentTarget.value}`, {
            scroll: false,
          });
        }}
        name=""
      />
    </SmallSectionWrapper>
  );
}
