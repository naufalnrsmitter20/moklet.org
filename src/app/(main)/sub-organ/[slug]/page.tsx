import Contact from "./components/parts/Contact";
import Overview from "./components/parts/Overview";
import VisiMisi from "./components/parts/VisiMisi";

export default function Organ() {
  // { params }: { params: { slug: string } }
  // const organ = params.slug.toUpperCase();

  return (
    <>
      <Overview />
      <VisiMisi />
      <Contact />
    </>
  );
}
