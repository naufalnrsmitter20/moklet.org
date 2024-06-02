import { H3, H4, P } from "@/app/_components/global/Text";

export function SlaText() {
  return (
    <>
      <H3 className="mb-4">
        Perjanjian Tingkat Layanan (Service Level Agreement) Moklet.org
      </H3>
      <div className="flex flex-col gap-6 px-6">
        <div>
          <H4>1. Pendahuluan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Perjanjian Tingkat Layanan (SLA) ini mengatur ketentuan layanan
              untuk Moklet.org, portal aplikasi web yang dikembangkan oleh
              MokletDev untuk SMK Telkom Malang.
            </P>
          </ul>
        </div>
        <div>
          <H4>2. Lingkup Layanan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Moklet.org adalah platform berita organisasi siswa yang
              menyediakan akses kepada anggota komunitas siswa SMK Telkom Malang
              untuk membaca dan mempublikasikan berita, pembaruan, dan informasi
              terkait kegiatan sekolah.
            </P>
            <P className="text-black">
              Pengunjung tamu hanya dapat melihat berita yang dipublikasikan
              oleh organisasi siswa internal sekolah.
            </P>
          </ul>
        </div>
        <div>
          <H4>3. Dukungan Pelanggan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev menyediakan dukungan pelanggan melalui email di
              dev@moklet.org untuk pertanyaan, keluhan, atau masalah teknis
              terkait layanan Moklet.org.
            </P>
            <P className="text-black">
              Waktu tanggapan untuk permintaan dukungan pelanggan adalah dalam
              waktu maksimal 24 jam pada hari kerja.
            </P>
          </ul>
        </div>
        <div>
          <H4>4. Kinerja Layanan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev berkomitmen untuk memastikan kinerja layanan yang
              memadai, termasuk kecepatan akses dan respons aplikasi yang
              memadai.
            </P>
            <P className="text-black">
              MokletDev akan memonitor kinerja aplikasi secara teratur dan
              mengambil tindakan perbaikan jika diperlukan untuk menjaga
              kualitas layanan.
            </P>
          </ul>
        </div>
        <div>
          <H4>5. Keamanan Informasi</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev akan menjaga keamanan informasi pengguna dengan
              menerapkan langkah-langkah keamanan yang sesuai.
            </P>
            <P className="text-black">
              MokletDev akan melakukan pemantauan dan pembaruan keamanan secara
              berkala untuk mengidentifikasi dan mengatasi potensi kerentanan
              keamanan.
            </P>
          </ul>
        </div>
        <div>
          <H4>6. Penggunaan Public API Blog</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev mempersilahkan akses ke Public API Blog untuk tujuan
              pembelajaran dan pengembangan, namun penggunaan API harus sesuai
              dengan aturan yang ditetapkan dan tidak boleh digunakan untuk
              mencuri atau menyalahgunakan data.
            </P>
          </ul>
        </div>
        <div>
          <H4>7. Perubahan dan Penutup</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Perjanjian ini dapat direvisi atau diperbarui sesuai kebutuhan
              dengan pemberitahuan sebelumnya kepada pengguna.
            </P>
            <P className="text-black">
              Perjanjian ini mengatur hubungan antara MokletDev dan pengguna
              Moklet.org dan tidak memberikan hak kepada pihak ketiga.
            </P>
          </ul>
        </div>
        <P className="text-black">
          Dengan menggunakan Moklet.org, Anda setuju untuk terikat oleh
          Perjanjian Tingkat Layanan ini. Jika terdapat pertanyaan lebih lanjut,
          silakan hubungi kami di metic@smktelkom-mlg.sch.id
        </P>
      </div>
    </>
  );
}

export function AupText() {
  return (
    <>
      <H3 className="mb-1">Acceptable Use Policy (AUP) Moklet.org</H3>
      <P className="mb-4">Terakhir diperbarui: 21 Maret 2024</P>
      <div className="flex flex-col gap-6 px-6">
        <div>
          <H4>1. Pendahuluan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Kebijakan Penggunaan yang Dapat Diterima ini bertujuan untuk
              mengatur penggunaan Moklet.org, portal aplikasi web yang
              dikembangkan oleh MokletDev untuk SMK Telkom Malang, dengan
              memastikan bahwa penggunaan layanan ini sesuai dengan nilai-nilai
              etika, hukum, dan keamanan.
            </P>
          </ul>
        </div>
        <div>
          <H4>2. Akses dan Penggunaan Layanan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Moklet.org menyediakan akses kepada anggota komunitas siswa SMK
              Telkom Malang untuk membaca dan mempublikasikan berita, pembaruan,
              dan informasi terkait kegiatan sekolah.
            </P>
            <P className="text-black">
              Pengunjung tamu hanya diperbolehkan untuk melihat berita yang
              dipublikasikan oleh organisasi siswa internal sekolah.
            </P>
            <P className="text-black">
              Untuk mempublikasikan berita, pengguna harus masuk menggunakan
              akun Single Sign-On (SSO) sekolah yang diberikan oleh SMK Telkom
              Malang.
            </P>
          </ul>
        </div>
        <div>
          <H4>3. Konten yang Dilarang</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Pengguna tidak diperbolehkan untuk mempublikasikan atau
              menyebarkan konten yang melanggar hukum, melanggar hak-hak orang
              lain, atau bertentangan dengan nilai-nilai etika sekolah.
            </P>
            <P className="text-black">
              Pengguna tidak boleh menggunakan Moklet.org untuk tujuan komersial
              atau promosi pribadi tanpa izin.
            </P>
          </ul>
        </div>
        <div>
          <H4>4. Penggunaan Public API Blog</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev mempersilahkan penggunaan Public API Blog untuk tujuan
              pembelajaran dan pengembangan.
            </P>
            <P className="text-black">
              Penggunaan Public API Blog harus sesuai dengan aturan yang
              ditetapkan dan tidak boleh digunakan untuk mencuri atau
              menyalahgunakan data.
            </P>
          </ul>
        </div>
        <div>
          <H4>5. Tanggung Jawab Pengguna</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Pengguna bertanggung jawab penuh atas konten yang mereka
              publikasikan dan aktivitas yang dilakukan melalui akun mereka.
            </P>
            <P className="text-black">
              Pengguna harus menjaga kerahasiaan akun dan password mereka dan
              tidak boleh memberikan akses ke akun mereka kepada orang lain.
            </P>
          </ul>
        </div>
        <div>
          <H4>6. Tindakan Penegakan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              MokletDev berhak untuk mengambil tindakan yang diperlukan terhadap
              pengguna yang melanggar Kebijakan Penggunaan yang Dapat Diterima
              ini, termasuk pembatasan akses atau penghapusan konten.
            </P>
          </ul>
        </div>
        <div>
          <H4>7. Perubahan pada Kebijakan</H4>
          <ul className="px-12 list-disc">
            <P className="text-black">
              Kebijakan Penggunaan yang Dapat Diterima ini dapat direvisi atau
              diperbarui sesuai kebutuhan dengan pemberitahuan sebelumnya kepada
              pengguna. Dengan menggunakan Moklet.org, Anda setuju untuk
              mematuhi Kebijakan Penggunaan yang Dapat Diterima ini. Jika Anda
              tidak setuju dengan kebijakan ini, harap jangan menggunakan
              layanan kami.
            </P>
          </ul>
        </div>
      </div>
    </>
  );
}
