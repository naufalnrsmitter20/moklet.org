import Image from "@/app/_components/global/Image";
import { P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import MdViewer from "@/app/(main)/berita/[slug]/_components/MdViewer";

export default function Structure({ structure }: { structure: string }) {
  return (
    <SectionWrapper id="struktur">
      <div className="flex flex-col gap-[54px] w-full">
        <MdViewer markdown={structure} />
      </div>
    </SectionWrapper>
  );
}
