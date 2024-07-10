import { Organisasi_Type } from "@prisma/client";

import { findOrganisasi } from "@/utils/database/organisasi.query";
import { findPeriod } from "@/utils/database/periodYear.query";
import { findNewestPost } from "@/utils/database/post.query";
import { notFound } from "next/navigation";

import Contact from "./components/parts/Contact";
import OrgGallery from "./components/parts/Gallery";
import Overview from "./components/parts/Overview";
import RelatedNews from "./components/parts/RelatedNews";
import Structure from "./components/parts/Stucture";
import VisiMisi from "./components/parts/VisiMisi";

export default async function Organ({
  params,
}: {
  params: { slug: string; period: string };
}) {
  const organisasiType = params.slug.toUpperCase() as Organisasi_Type;
  const period = await findPeriod({ period: params.period });

  if (!period) return notFound();

  const organisasi = await findOrganisasi({
    organisasi_period_id: {
      organisasi: organisasiType,
      period_id: period.id,
    },
  });

  if (!organisasi) return notFound();

  const relatedNews = await findNewestPost(5, {
    AND: {
      tags: { some: { tagName: organisasiType } },
      published: true,
    },
  });

  return (
    <div className="pt-3 md:pt-0">
      <Overview
        organisasi_name={organisasi.organisasi_name}
        description={organisasi.description}
        period={period.period}
        logo={organisasi.logo}
      />
      {organisasi.vision && organisasi.mission && (
        <VisiMisi visi={organisasi.vision} misi={organisasi.mission} />
      )}
      <Structure structure={organisasi.structure} />
      <OrgGallery
        image={organisasi.image}
        organisasi_name={organisasi.organisasi}
        period={period.period}
        image_description={organisasi.image_description}
      />
      <RelatedNews data={relatedNews} orgName={organisasiType} />
      <Contact data={organisasi} />
    </div>
  );
}
