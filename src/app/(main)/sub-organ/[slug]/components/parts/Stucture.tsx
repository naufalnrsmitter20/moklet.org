import Image from "@/app/_components/global/Image";
import { P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Structure() {
  return (
    <SectionWrapper id="struktur">
      <div className="flex flex-col gap-[54px] w-full">
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          volutpat tellus quis urna gravida, quis ultrices arcu consequat.
          Praesent aliquet ante molestie faucibus facilisis. Integer fermentum,
          sapien ac tempor tempor, elit ipsum sollicitudin purus, vel sodales
          erat dolor vitae nisl. Vivamus aliquet
        </P>
        <Image
          src={"/images/bagan.png"}
          alt="bagan"
          width={1192}
          height={686}
          className="w-full h-auto"
        />
      </div>
    </SectionWrapper>
  );
}
