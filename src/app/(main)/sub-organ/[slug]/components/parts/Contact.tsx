import LinkButton from "@/app/_components/global/Button";
import { H2 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="w-full h-[126px] px-[52px] py-[40px] rounded-full bg-primary-400 flex justify-between items-center">
        <H2 className="font-bold text-white">
          Lorem ipsum dolor sit consectetur
        </H2>
        <LinkButton href="#" variant={"quartiary"} className="group">
          <span className="flex items-center gap-2 justify-center">
            Lorem ipsum
            <ArrowRight className="group-hover:translate-x-1/4 transition-all duration-300" />
          </span>
        </LinkButton>
      </div>
    </SectionWrapper>
  );
}
