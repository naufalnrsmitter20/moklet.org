"use client";

import Link from "next/link";

import { UnderlinedTitle, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { NewsFigure } from "@/app/_components/global/NewsFigure";

export default function News({
  latestPosts,
}: Readonly<{
  latestPosts: PostWithTagsAndUser[];
}>) {
  return (
    <SectionWrapper id="berita">
      <div className="flex w-full flex-col gap-[54px]">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-[18px] md:gap-0">
          <UnderlinedTitle underlineClassName="w-[65px] md:w-[100px] top-4 md:top-[24px]">
            Berita Terbaru Organisasi & Sub-organisasi
          </UnderlinedTitle>
          <Link href="/berita">
            <div className="group flex gap-[8px]">
              <span className="text-base text-primary-400 transition-all duration-500 group-hover:text-primary-200">
                Lihat semua
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        <div className="w-full overflow-x-none">
          <div
            className="flex flex-col md:flex-row w-full justify-between gap-[36px]"
            id="news-container"
          >
            {latestPosts.length !== 0 ? (
              <>
                {latestPosts.map((post) => (
                  <NewsFigure key={post.id} post={post} />
                ))}
                {latestPosts.length % 2 === 0 && (
                  <div className="w-full md:w-[31.2%]"></div>
                )}
              </>
            ) : (
              <P>Belum ada berita apa-apa, nih...</P>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
