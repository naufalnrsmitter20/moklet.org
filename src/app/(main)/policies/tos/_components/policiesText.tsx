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
          <P className="text-black">
            Moklet.org menyediakan akses ke layanan berita dan informasi
            kegiatan sekolah. Dengan menggunakan layanan kami, Anda menyetujui
            syarat dan ketentuan berikut.
          </P>
        </div>
        <div>
          <H4>2. Pendaftaran dan Akun</H4>
          <P className="text-black">
            Anda mungkin diminta untuk memberikan informasi tertentu (seperti
            identifikasi atau detail kontak) sebagai bagian dari proses
            pendaftaran atau penggunaan berkelanjutan layanan. Informasi
            pendaftaran yang Anda berikan harus akurat dan terbaru.
          </P>
        </div>
        <div>
          <H4>3. Kepatuhan Hukum</H4>
          <P className="text-black">
            Anda setuju untuk mematuhi semua hukum, peraturan, dan hak pihak
            ketiga yang berlaku. Anda tidak akan menggunakan layanan kami untuk
            mempromosikan aktivitas ilegal atau pelanggaran hak pihak ketiga.
          </P>
        </div>
        <div>
          <H4>4. Penggunaan Layanan dan Batasan</H4>
          <P className="text-black">
            Kami menetapkan batasan pada penggunaan layanan kami, termasuk
            membatasi jumlah permintaan layanan atau pengguna yang dapat Anda
            layani. Anda setuju untuk tidak mencoba menghindari batasan ini.
            Jika Anda ingin menggunakan layanan di luar batasan ini, Anda harus
            mendapatkan izin dari kami.
          </P>
        </div>
        <div>
          <H4>5. Dukungan Pelanggan</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              MokletDev menyediakan dukungan pelanggan melalui email di
              dev@moklet.org untuk pertanyaan, keluhan, atau masalah teknis
              terkait layanan Moklet.org.
            </li>
            <li className="text-black">
              Waktu tanggapan untuk permintaan dukungan pelanggan adalah dalam
              waktu maksimal 24 jam pada hari kerja.
            </li>
          </ul>
        </div>
        <div>
          <H4>6. Lingkup Layanan</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Moklet.org adalah platform berita organisasi siswa yang
              menyediakan akses kepada anggota komunitas siswa SMK Telkom Malang
              untuk membaca dan mempublikasikan berita, pembaruan, dan informasi
              terkait kegiatan sekolah.
            </li>
            <li className="text-black">
              Pengunjung tamu hanya dapat melihat berita yang dipublikasikan
              oleh organisasi siswa internal sekolah.
            </li>
          </ul>
        </div>
        <div>
          <H4>7. Keamanan Informasi</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              MokletDev akan menjaga keamanan informasi pengguna dengan
              menerapkan langkah-langkah keamanan yang sesuai.
            </li>
            <li className="text-black">
              MokletDev akan melakukan pemantauan dan pembaruan keamanan secara
              berkala untuk mengidentifikasi dan mengatasi potensi kerentanan
              keamanan.
            </li>
          </ul>
        </div>
        <div>
          <H4>8. Penggunaan Public API</H4>
          <P className="text-black">
            MokletDev mempersilahkan akses ke Public API untuk tujuan
            pembelajaran dan pengembangan, namun penggunaan API harus sesuai
            dengan aturan yang ditetapkan dan tidak boleh digunakan untuk
            mencuri atau menyalahgunakan data.
          </P>
        </div>
        <div>
          <H4>9. Tanggung Jawab</H4>
          <P className="text-black">
            Kecuali dinyatakan secara tegas dalam syarat ini, kami tidak membuat
            janji khusus tentang layanan kami. Layanan kami disediakan
            &quot;sebagaimana adanya&quot;.
          </P>
        </div>
        <div>
          <H4>10. Tanggung Jawab</H4>
          <P className="text-black">
            Dalam batas yang diizinkan oleh hukum, kami tidak bertanggung jawab
            atas kerugian tidak langsung, khusus, konsekuensial, atau hukuman.
          </P>
        </div>
        <div>
          <H4>11. Perubahan dan Penutup</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Perjanjian ini dapat direvisi atau diperbarui sesuai kebutuhan
              dengan pemberitahuan sebelumnya kepada pengguna.
            </li>
            <li className="text-black">
              Perjanjian ini mengatur hubungan antara MokletDev dan pengguna
              Moklet.org dan tidak memberikan hak kepada pihak ketiga.
            </li>
          </ul>
        </div>
        <P className="text-black">
          Dengan menggunakan Moklet.org, Anda setuju untuk terikat oleh
          Perjanjian Tingkat Layanan ini. Jika terdapat pertanyaan lebih lanjut,
          silakan hubungi kami di dev@moklet.org
        </P>
      </div>
    </>
  );
}

export function AupText() {
  return (
    <>
      <H3 className="mb-1">Acceptable Use Policy (AUP) Moklet.org</H3>
      <P className="mb-4">Terakhir diperbarui: 12 Juli 2024</P>
      <div className="flex flex-col gap-6 px-6">
        <div>
          <H4>1. Pendahuluan</H4>
          <P className="text-black">
            Kami di Moklet.org menghargai privasi Anda. Kebijakan Privasi ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
            membagikan informasi pribadi Anda saat menggunakan layanan kami.
          </P>
        </div>
        <div>
          <H4>2. Informasi yang Kami Kumpulkan</H4>
          <P className="text-black">
            Kami dapat mengumpulkan informasi berikut dari Anda:
          </P>
          <ul className="px-12 list-disc">
            <li>Informasi akun Google: alamat email, nama pengguna.</li>
            <li className="text-black">
              Data yang Anda berikan langsung: misalnya, saat menggunakan
              layanan kami.
            </li>
          </ul>
        </div>
        <div>
          <H4>3. Akses dan Penggunaan Layanan</H4>
          <P className="text-black">
            Kami menggunakan informasi yang kami kumpulkan untuk:
          </P>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Memberikan dan meningkatkan layanan kami.
            </li>
            <li className="text-black">Memverifikasi identitas pengguna.</li>
            <li className="text-black">
              Menyediakan dukungan dan layanan pelanggan.
            </li>
            <li className="text-black">
              Mematuhi kewajiban hukum dan peraturan.
            </li>
          </ul>
        </div>
        <div>
          <H4>5. Penyimpanan dan Keamanan Informasi</H4>
          <P className="text-black">
            Kami menyimpan informasi Anda dengan aman menggunakan
            langkah-langkah teknis dan organisasi yang sesuai. Kami hanya
            menyimpan informasi Anda selama diperlukan untuk tujuan yang
            dijelaskan dalam kebijakan ini.
          </P>
        </div>
        <div>
          <H4>6. Berbagi Informasi</H4>
          <P className="text-black">
            Kami tidak akan membagikan informasi pribadi Anda dengan pihak
            ketiga kecuali:
          </P>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Pengguna tidak diperbolehkan untuk mempublikasikan atau
              menyebarkan konten yang melanggar hukum, melanggar hak-hak orang
              lain, atau bertentangan dengan nilai-nilai etika sekolah.
            </li>
            <li className="text-black">Dengan persetujuan Anda.</li>
            <li className="text-black">
              Untuk mematuhi hukum atau proses hukum.
            </li>
            <li className="text-black">
              Untuk melindungi hak, properti, atau keamanan kami atau pihak
              lain.
            </li>
          </ul>
        </div>
        <div>
          <H4>7. Akses dan Kontrol Atas Informasi Anda</H4>
          <P className="text-black">
            Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
            informasi pribadi Anda yang kami miliki. Anda dapat menghubungi kami
            di dev@moklet.org untuk mengajukan permintaan terkait informasi
            Anda.
          </P>
        </div>
        <div>
          <H4>8. Konten yang Dilarang</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Pengguna tidak diperbolehkan untuk mempublikasikan atau
              menyebarkan konten yang melanggar hukum, melanggar hak-hak orang
              lain, atau bertentangan dengan nilai-nilai etika sekolah.
            </li>
            <li className="text-black">
              Pengguna tidak boleh menggunakan Moklet.org untuk tujuan komersial
              atau promosi pribadi tanpa izin.
            </li>
          </ul>
        </div>
        <div>
          <H4>9. Tanggung Jawab Pengguna</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Pengguna bertanggung jawab penuh atas konten yang mereka
              publikasikan dan aktivitas yang dilakukan melalui akun mereka.
            </li>
            <li className="text-black">
              Pengguna harus menjaga kerahasiaan akun dan password mereka dan
              tidak boleh memberikan akses ke akun mereka kepada orang lain.
            </li>
          </ul>
        </div>
        <div>
          <H4>10. Tindakan Penegakan</H4>
          <ul className="px-12 list-disc">
            <li className="text-black">
              Kami berhak untuk mengambil tindakan yang diperlukan terhadap
              pengguna yang melanggar Kebijakan Penggunaan yang Dapat Diterima
              ini, termasuk pembatasan akses atau penghapusan konten.
            </li>
          </ul>
        </div>
        <div>
          <H4>11. Perubahan pada Kebijakan</H4>
          <P className="text-black">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Kami akan memberi tahu Anda tentang perubahan dengan memposting
            kebijakan baru di situs web kami dan memberi tahu Anda melalui email
            atau pemberitahuan aplikasi. Jika Anda memiliki pertanyaan atau
            kekhawatiran tentang Kebijakan Privasi ini, jangan ragu untuk
            menghubungi kami di dev@moklet.org.
          </P>
        </div>
      </div>
    </>
  );
}
