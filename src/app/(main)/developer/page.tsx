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
          <H1>Meet Our Team of Contributors</H1>
          <P>
            Welcome to moklet.org&apos;s contributors page! you&apos;ll find a
            list of our esteemed contributors along with a brief overview of
            their roles or the contributions they&apos;ve made. Whether
            it&apos;s through code contributions, bug fixes, documentation
            improvements, design enhancements, or community support, each of
            these individuals has played a significant role in shaping the
            project and pushing it forward.
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
