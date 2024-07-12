import LinkButton from "@/app/_components/global/Button";
import { H2, H4 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { Organisasi } from "@prisma/client";

export default function Contact({ data }: { data: Organisasi }) {
  return (
    <SectionWrapper id="contact">
      <div className="w-full h-auto lg:h-[126px] px-[52px] py-[40px] rounded-2xl lg:rounded-full bg-primary-400 flex flex-col lg:flex-row justify-start lg:justify-between  items-start lg:items-center gap-11">
        <H2 className="font-bold text-white hidden sm:block">
          {data.organisasi} di sosial media!
        </H2>
        <H4 className="font-bold text-white block sm:hidden">
          Cari {data.organisasi} di sosial media!
        </H4>
        <LinkButton
          href={data.contact}
          variant={"quartiary"}
          className="group"
          target="_blank"
        >
          <span className="flex items-center gap-2 justify-center">
            Temukan
            <ArrowRight className="group-hover:translate-x-1/4 transition-all duration-300" />
          </span>
        </LinkButton>
      </div>
    </SectionWrapper>
  );
}
