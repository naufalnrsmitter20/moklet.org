import { Organisasi_Type } from "@prisma/client";

import { findOrganisasi } from "@/utils/database/organisasi.query";
import { findLatestPeriod } from "@/utils/database/period.query";
import { findNewestPost } from "@/utils/database/post.query";

import Contact from "./components/parts/Contact";
import OrgGallery from "./components/parts/Gallery";
import Overview from "./components/parts/Overview";
import RelatedNews from "./components/parts/RelatedNews";
import Structure from "./components/parts/Stucture";
import VisiMisi from "./components/parts/VisiMisi";

const image = "https://placehold.co/750x500?text=1";

export default async function Organ({ params }: { params: { slug: string } }) {
  const organisasiType = params.slug.toUpperCase() as Organisasi_Type;
  const latestPeriod = await findLatestPeriod();
  const organisasi = await findOrganisasi({
    organisasi_period_id: {
      organisasi: organisasiType,
      period_id: latestPeriod.id,
    },
  });
  const relatedNews = await findNewestPost(5, {
    tags: { some: { tagName: organisasiType } },
  });

  return (
    <>
      <Overview />
      <VisiMisi />
      <Structure />
      <OrgGallery image={image} />
      <RelatedNews data={relatedNews} orgName={organisasiType} />
      <Contact />
    </>
  );
}
