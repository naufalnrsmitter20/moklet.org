import Image from "@/app/_components/global/Image";
import { H2 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function OrgGallery({
  image,
  organisasi_name,
  period,
}: {
  image: string;
  organisasi_name: string;
  period: string;
}) {
  return (
    <SectionWrapper id="gallery">
      <div className="flex flex-col gap-[54px] w-full">
        <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center gap-[18px] lg:gap-[52px]">
          <div className="max-w-full">
            <H2 className="mb-0">
              Photo of {organisasi_name} {period.replace(/-/, " / ")}
            </H2>
          </div>
        </div>
        <div className="flex gap-[18px] flex-col lg:flex-row items-center">
          <div className="w-full rounded-2xl overflow-hidden h-[600px]">
            <Image
              src={image}
              alt="Image"
              width={587}
              height={407}
              unoptimized
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
