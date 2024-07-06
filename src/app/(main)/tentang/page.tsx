import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function Tentang() {
  return (
    <>
      <SectionWrapper id="tentang">
        <div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <H1>Tentang Moklet.org</H1>
            <P>
              Selamat datang di Moklet.org, platform yang berfungsi sebagai
              portal kreativitas dan inovasi organisasi di SMK Telkom Malang.
              Moklet.org berfungsi sebagai jendela menuju kegiatan kreatif dan
              inovatif yang dilakukan oleh berbagai organisasi dan
              sub-organisasi di lingkungan Moklet. Moklet.org juga berfungsi
              sebagai sistem informasi dan platform berbagi berita-berita
              tentang berbagai kegiatan yang dilakukan Mokleters.
            </P>
          </div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <P>
              Melalui Moklet.org, publik dapat mengakses berita terbaru mengenai
              kegiatan-kegiatan organisasi dan sub-organisasi di Moklet. Dari
              acara-acara besar hingga kegiatan sehari-hari, informasi yang
              menunjukkan dinamika dan perkembangan yang terjadi di lingkungan
              sekolah. Selain itu, publik dapat mengetahui lebih dalam tentang
              peran penting OSIS dan MPK dalam memimpin dan mengorganisir
              berbagai kegiatan dalam SMK Telkom Malang, serta bagaimana mereka
              membentuk kepemimpinan siswa di Moklet.
            </P>
          </div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <P>
              Moklet.org juga menyediakan ruang bagi siswa untuk menyampaikan
              aspirasi mereka melalui fitur formulirnya. Dengan ini, siswa dapat
              berbagi impian dan harapan mereka, yang akan menjadi masukan
              berharga bagi MPK dalam merancang dan mengembangkan
              program-program yang lebih baik. Kami percaya bahwa setiap
              aspirasi memiliki kekuatan untuk mewujudkan perubahan positif dan
              mendorong kemajuan bersama.
            </P>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
