import Image from "@/app/_components/global/Image";
import { P, UnderlinedTitle } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function OrgGallery({ Images }: { Images: string[] }) {
    return (
        <SectionWrapper id="gallery">
            <div className="flex flex-col gap-[54px] w-full">
                <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center gap-[18px] lg:gap-[52px]">
                    <div className="max-w-full lg:max-w-[36%]">
                        <UnderlinedTitle underlineClassName="w-[65px] md:w-[243px] top-4 md:top-[26px]" className="mb-0">Lorem ipsum dolor sit</UnderlinedTitle>
                    </div>
                    <div className="max-w-full lg:max-w-[60%]">
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            volutpat tellus quis urna gravida, quis ultrices arcu consequat.
                            Praesent aliquet.
                        </P>
                    </div>
                </div>
                <div className="flex gap-[18px] flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
                        <Image src={Images[0]} alt="Image" width={587} height={407} unoptimized className="w-full h-full" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-wrap gap-[18px]">
                        {Images.slice(1).map((image, i) => (
                            <div key={i} className="w-full sm:w-[48.2%] lg:w-[45%] h-[50%] rounded-2xl overflow-hidden">
                                <Image src={image} alt="Image" width={284} height={194} unoptimized className="w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
