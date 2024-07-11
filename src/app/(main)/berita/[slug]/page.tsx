import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticle, WithContext } from "schema-dts";

import Image from "@/app/_components/global/Image";
import { Tags } from "@/app/_components/global/NewsFigure";
import { H2, H3, H4, P } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { stringifyDate } from "@/utils/atomics";
import { findPost, updatePost } from "@/utils/database/post.query";

import GoBack from "./_components/BackButton";
import MdViewer from "./_components/MdViewer";
import Related from "./_components/RelatedNews";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await findPost({ slug: params.slug, published: true });

  if (!post)
    return {
      title: "Berita tidak ditemukan",
    };

  return {
    title: post.title,
    description: post.description,
    authors: { name: post.user.name },
    openGraph: {
      url: `${process.env.URL ?? "https://www.moklet.org/berita/"}${post.slug}`,
      images: post.thumbnail,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: new Date(post.published_at!).toISOString(),
      modifiedTime: new Date(post.updated_at).toISOString(),
      authors: post.user.name,
    },
    robots: "max-image-preview:large",
    keywords:
      "smk telkom malang, moklet, " +
      post.tags.map((tag) => tag.tagName).join(", "),
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await findPost({ slug: params.slug, published: true });

  if (!post) notFound();
  else await updatePost({ id: post.id }, { view_count: { increment: 1 } });

  const jsonLd: WithContext<NewsArticle> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    image: post.thumbnail,
    description: post.description,
    headline: post.title,
    datePublished: new Date(post.published_at!).toISOString(),
    dateModified: new Date(post.updated_at!).toISOString(),
    thumbnailUrl: post.thumbnail,
  };

  return (
    <SmallSectionWrapper id={"Post-" + params.slug}>
      <div className="flex gap-[52px] xl:flex-row flex-col">
        <div className="w-full xl:w-[768px] flex flex-col gap-[52px]">
          <div className="flex gap-[18px] lg:gap-[32px]">
            <GoBack />
            <H2 className="text-wrap w-[686px] hidden lg:block">
              {post?.title}
            </H2>
            <H4 className="text-wrap w-[686px] block lg:hidden">
              {post?.title}
            </H4>
          </div>
          <div>
            <div className="w-full h-[253px] md:h-[450px] xl:w-650px mb-[52px] lg:mb-[72px]">
              <Image
                src={post?.thumbnail}
                alt={"image-" + post?.title}
                width={768}
                height={450}
                className="w-full h-full rounded-[20px]"
                unoptimized
              />
            </div>
            <div className="w-full">
              <div className="mb-[42px] flex flex-col lg:flex-row justify-between items-start gap-[32px] lg:gap-0 lg:items-center">
                <div className="flex gap-[10px]">
                  {post?.tags.map((tag) => (
                    <Tags tag={tag} key={tag.tagName} />
                  ))}
                </div>
                <div className="flex items-center gap-[40px]">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post?.user.user_pic as string}
                      alt={post?.user.name + "'s Pfp"}
                      unoptimized
                      height={28}
                      width={28}
                      className="h-7 w-7 object-cover rounded-full"
                    />
                    <span className="text-base text-black">
                      {post?.user.name}
                    </span>
                  </div>
                  <span className="text-neutral-500">
                    {stringifyDate(post?.created_at)}
                  </span>
                  <P>{post.view_count} views</P>
                </div>
              </div>
              <MdViewer markdown={post?.content} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[52px] w-full">
          <H3>Berita Terkait</H3>
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain */}
          <Related currentPostId={post.id} tags={post?.tags!} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SmallSectionWrapper>
  );
}
