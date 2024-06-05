import { SectionWrapper } from "@/app/_components/global/Wrapper";
import Overview from "./components/parts/Overview";
import VisiMisi from "./components/parts/VisiMisi";
import Contact from "./components/parts/Contact";

export default function Organ({ params }: { params: { slug: string } }) {
  const organ = params.slug.toUpperCase();

  return (
    <>
      <Overview />
      <VisiMisi />
      <Contact />
    </>
  );
}
