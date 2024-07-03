import { SelectField } from "@/app/_components/global/Input";
import { H2, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Overview() {
  return (
    <SectionWrapper id={"overview"}>
      <div className="flex flex-col gap-[58px] w-full">
        <div className="w-full flex flex-col gap-[18px]">
          <div className="flex md:gap-0 items-center justify-between">
            <div className="flex flex-col gap-[44px]">
              <div className="bg-primary-50 rounded-full w-[106px] h-[106px] border border-primary-400 flex justify-center items-center"></div>
              <H2 className="font-bold">Media Moklet</H2>
            </div>
            <SelectField
              name="Periode"
              options={[{ label: "2023/2024", value: "2023/2024" }]}
            />
          </div>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            volutpat tellus quis urna gravida, quis ultrices arcu consequat.
            Praesent aliquet ante molestie faucibus facilisis. Integer
            fermentum, sapien ac tempor tempor.
          </P>
        </div>
      </div>
    </SectionWrapper>
  );
}
