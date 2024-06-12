import { H2, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Overview() {
  return (
    <SectionWrapper id={"TSVC"}>
      <div className="flex flex-col gap-[58px] w-full">
        <div className="flex items-center gap-[72px] w-full lg:w-[658px]">
          <div className="flex flex-col gap-[44px]">
            <div className="bg-primary-50 rounded-full w-[106px] h-[106px] border border-primary-400 flex justify-center items-center"></div>
            <div className="flex flex-col gap-[18px]">
              <H2 className="font-bold">Media Moklet</H2>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                volutpat tellus quis urna gravida, quis ultrices arcu consequat.
                Praesent aliquet ante molestie faucibus facilisis. Integer
                fermentum, sapien ac tempor tempor.
              </P>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
