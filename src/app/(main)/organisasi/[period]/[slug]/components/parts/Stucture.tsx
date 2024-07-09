import MdViewer from "@/app/(main)/berita/[slug]/_components/MdViewer";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Structure({ structure }: { structure: string }) {
  return (
    <SectionWrapper id="struktur">
      <div className="flex flex-col gap-[54px] w-full">
        <MdViewer markdown={structure} />
      </div>
    </SectionWrapper>
  );
}
