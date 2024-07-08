import { Metadata } from "next";

import LinkButton from "@/app/_components/global/Button";
import Image from "@/app/_components/global/Image";
import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export const metadata: Metadata = {
  title: "Page under maintenance",
};

export default async function Maintenance() {
  return (
    <SectionWrapper id="success">
      <div className="flex flex-col justify-center items-center gap-20 px-5 py-[22px]">
        <Image
          src={"/images/Forbidden.svg"}
          alt={"404"}
          width={460}
          height={244}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mb-11 text-center">
            <H1 className="mb-[18px]">Halaman sedang dalam perbaikan</H1>
            <P>
              Silahkan kembali lagi nanti. Hubungi Admin jika menurut Anda ini
              tidak benar.
            </P>
          </div>
          <LinkButton variant={"primary"} href="/">
            Kembali ke beranda
          </LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
