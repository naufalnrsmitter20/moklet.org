import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Tentang() {
  return (
    <SectionWrapper id="tentang">
      <div>
        <div className="flex flex-col gap-[18px] mb-6 text-wrap">
          <H1>Tentang Moklet.org</H1>
          <P>
            Moklet.org merupakan sebuah portal kreativitas dan inovasi
            organisasi di SMK Telkom Malang (Moklet). Moklet.org berfungsi
            sebagai jendela menuju kegiatan kreatif dan inovatif yang dilakukan
            oleh berbagai organisasi dan sub-organisasi di lingkungan Moklet.
            Portal ini juga berfungsi sebagai sistem informasi dan platform
            untuk berbagi berita tentang berbagai kegiatan yang dilakukan oleh
            para Mokleters.
            <br />
            <br />
            Moklet.org bertujuan untuk memperkenalkan berbagai organisasi di SMK
            Telkom Malang kepada publik, menunjukkan betapa beragam dan aktifnya
            lingkungan organisasi di sekolah ini, serta bagaimana setiap
            kegiatan dan program yang dijalankan dapat memberikan manfaat bagi
            siswa.
            <br />
            <br />
            Proyek Moklet.org juga bersifat open-source, yang berarti semua
            siswa SMK Telkom Malang dapat memberikan kontribusi mereka pada
            proyek ini dan mendapatkan kredit sebagai kontributor pada laman
            Kontributor sebagai bentuk penghargaan.
          </P>
        </div>
      </div>
    </SectionWrapper>
  );
}
