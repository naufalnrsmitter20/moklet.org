import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import DeveloperFigure from "./_components/DeveloperFigure";
import { promises as fs } from "fs";

interface Developer {
  name: string;
  role: string;
  picture: string;
  instagram: string;
  linkedin: string;
  website: string;
}

export default async function Developers() {
  const file = await fs.readFile(
    process.cwd() + "/public/contributors.json",
    "utf-8",
  );
  const devs: Developer[] = JSON.parse(file);

  return (
    <SectionWrapper id="developer">
      <div>
        <div className="flex flex-col gap-[18px] mb-[54px] text-wrap">
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

        <div className="w-full flex flex-wrap gap-x-0 lg:gap-x-[38px] gap-y-[62px]">
          {devs.map((dev) => (
            <DeveloperFigure dev={dev} key={dev.name} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
