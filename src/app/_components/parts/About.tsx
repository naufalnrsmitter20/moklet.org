import LinkButton from "@/app/_components/global/Button";
import Image from "@/app/_components/global/Image";
import { P, UnderlinedTitle } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function About() {
  return (
    <SectionWrapper id="tentang">
      <div className="flex flex-col gap-[72px] md:gap-0 md:flex-row w-full justify-between">
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/About.png"}
            alt="About"
            width={470}
            height={390}
            className="w-full"
          />
        </div>
        <div className="flex w-full max-w-[680px] flex-col">
          <div className="mb-11">
            <div className="mb-[42px]">
              <UnderlinedTitle underlineClassName="w-[65px] md:w-[100px] top-4 md:top-[24px]">
                Portal Kegiatan Organisasi dan Sub-Organisasi di Moklet
              </UnderlinedTitle>
              <P>
                moklet.org merupakan sebuah portal informasi yang berisikan
                kegiatan-kegiatan yang dilakukan oleh organisasi dan
                sub-organisasi di Moklet (SMK Telkom Malang).
              </P>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-[34px]">
              <div className="flex flex-col w-full sm:w-1/2 gap-[24px] text-wrap">
                <Image
                  src={"/images/logo/osis.png"}
                  alt={"OSIS SMK Telkom Malang"}
                  width={43}
                  height={40}
                />
                <div className="flex flex-col gap-[8px]">
                  <span className="text-lg font-bold ">
                    OSIS SMK TELKOM MALANG
                  </span>
                  <P>
                    Organisasi siswa di Moklet yang bertanggung jawab untuk
                    mengkoordinir berbagai kegiatan sekolah.
                  </P>
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 gap-[24px] text-wrap">
                <Image
                  src={"/images/logo/mpk.png"}
                  alt={"MPK SMK Telkom Malang"}
                  width={39.41}
                  height={39.41}
                />
                <div className="flex flex-col gap-[8px]">
                  <span className="text-lg font-bold ">
                    MPK SMK Telkom Malang
                  </span>
                  <P>
                    Majelis siswa di Moklet yang bertanggung jawab atas
                    organisasi dan aspirasi siswa-siswi di SMK Telkom Malang.
                  </P>
                </div>
              </div>
            </div>
          </div>
          <LinkButton variant={"primary"} href="#">
            Baca lebih detail
          </LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
