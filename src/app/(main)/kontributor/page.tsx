import { promises as fs } from "fs";

import { H1, H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { sortData, type Developer } from "@/utils/contributorsSorting";

import DeveloperFigure from "./_components/DeveloperFigure";

export default async function Developers() {
  const file = await fs.readFile(
    process.cwd() + "/public/contributors.json",
    "utf-8",
  );
  const devs: Developer[] = JSON.parse(file);

  return (
    <SectionWrapper id="contributors">
      <div>
        <div className="flex flex-col gap-[18px] mb-6 text-wrap">
          <H1>Kontributor Moklet.org</H1>
          <P>
            Selamat datang di halaman kontributor Moklet.org! Anda akan
            menemukan daftar kontributor Moklet.org beserta gambaran singkat
            tentang peran atau kontribusi yang mereka berikan. Baik melalui
            kontribusi kode, perbaikan bug, peningkatan dokumentasi, perbaikan
            desain, atau dukungan komunitas, setiap individu ini telah memainkan
            peran penting dalam pembuatan proyek ini dan mendorongnya maju.
          </P>
        </div>

        <div className="flex flex-col gap-[18px] mb-[54px] text-wrap">
          <H4>Informasi kontributor pada proyek open-source Moklet.org</H4>
          <ol className="px-6 list-decimal">
            <P className="text-neutral-500">
              <b>Manager</b>
              <br />
              Pemimpin utama dalam proyek ini yang bertanggung jawab sepenuhnya
              terhadap keseluruhan proyek dan memandu anggota tim lainnya.
            </P>
            <P className="text-neutral-500">
              <b>Maintainer</b>
              <br />
              Individu yang bertanggung jawab atas perkembangan dan kelancaran
              proyek, serta memberikan kontribusi yang signifikan.
            </P>
            <P className="text-neutral-500">
              <b>Graphic & UI/UX Designer</b> <br />
              Bertanggung jawab merancang antarmuka pengguna (UI) yang intuitif
              dan menarik serta mengoptimalkan pengalaman pengguna (UX).
            </P>
            <P className="text-neutral-500">
              <b>Committer</b>
              <br />
              Kontributor yang memberikan kontribusi berharga. Statusnya
              dinaikkan sebagai &quot;Committer&quot; menunjukkan tingkat
              kontribusi yang cukup tinggi dalam proyek ini.
            </P>
            <P className="text-neutral-500">
              <b>Contributor</b> <br />
              Individu yang berpartisipasi dalam menulis kode, patch
              dokumentasi, atau memberikan kontribusi positif lainnya terhadap
              proyek ini.
            </P>
          </ol>
        </div>

        <div className="w-full flex flex-wrap gap-x-0 lg:gap-x-[38px] gap-y-[62px]">
          {sortData(devs).map((dev) => (
            <DeveloperFigure dev={dev} key={dev.name} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
