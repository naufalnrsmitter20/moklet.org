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
              Selamat datang di Moklet.org, portal yang didedikasikan untuk
              mengeksplorasi kreativitas dan inovasi di SMK Telkom Malang.
              Moklet.org berfungsi sebagai jendela menuju kegiatan kreatif dan
              inovatif yang dilakukan oleh berbagai organisasi dan
              sub-organisasi di lingkungan sekolah ini. Di sini, Anda akan
              menemukan berbagai informasi dan berita terbaru yang menggambarkan
              semangat kolaborasi dan dedikasi siswa dalam berbagai kegiatan.
            </P>
          </div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <P>
              Melalui halaman ini, Anda dapat mengakses berita terbaru mengenai
              kegiatan organisasi dan sub-organisasi di Moklet. Dari acara-acara
              besar hingga kegiatan sehari-hari, kami menyajikan informasi
              terkini yang menunjukkan dinamika dan perkembangan yang terjadi di
              lingkungan sekolah. Selain itu, Anda juga bisa mengetahui lebih
              dalam tentang peran penting OSIS dan MPK dalam memimpin dan
              mengorganisir berbagai kegiatan, serta bagaimana mereka membentuk
              kepemimpinan siswa di Moklet.
            </P>
          </div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <P>
              Moklet.org juga memberikan wadah bagi pengembangan bakat siswa
              melalui berbagai sub-organisasi di bawah naungan OSIS. Di sini,
              siswa dapat menemukan dan mengasah potensi terbaik mereka dalam
              lingkungan yang inspiratif dan mendukung. Beragam kegiatan yang
              ditawarkan oleh sub-organisasi ini memungkinkan siswa untuk
              mengekspresikan diri dan berkembang secara optimal, baik dalam
              bidang akademik maupun non-akademik.
            </P>
          </div>
          <div className="flex flex-col gap-[18px] mb-6 text-wrap">
            <P>
              Tidak hanya itu, Moklet.org juga menyediakan ruang bagi siswa
              untuk menyampaikan aspirasi mereka demi masa depan yang lebih
              baik. Melalui platform ini, siswa dapat berbagi impian dan harapan
              mereka, yang akan menjadi masukan berharga bagi MPK dalam
              merancang dan mengembangkan program-program yang lebih baik. Kami
              percaya bahwa setiap aspirasi memiliki kekuatan untuk mewujudkan
              perubahan positif dan mendorong kemajuan bersama.
            </P>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
