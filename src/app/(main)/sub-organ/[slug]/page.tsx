import { findNewestPost, findPosts } from "@/utils/database/post.query";

import Contact from "./components/parts/Contact";
import OrgGallery from "./components/parts/Gallery";
import Overview from "./components/parts/Overview";
import RelatedNews from "./components/parts/RelatedNews";
import Structure from "./components/parts/Stucture";
import VisiMisi from "./components/parts/VisiMisi";

const images = [
  "https://placehold.co/750x500?text=1",
  "https://placehold.co/750x500?text=2",
  "https://placehold.co/750x500?text=3",
  "https://placehold.co/750x500?text=4",
  "https://placehold.co/750x500?text=5",
];

export default async function Organ({ params }: { params: { slug: string } }) {
  const organ = params.slug.toUpperCase();
  const relatedNews = await findNewestPost(5, {
    tags: { some: { tagName: organ } },
  });

  return (
    <>
      <Overview />
      <VisiMisi />
      <Structure />
      <OrgGallery Images={images} />
      <RelatedNews data={relatedNews} orgName={organ} />
      <Contact />
    </>
  );
}
