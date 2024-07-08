import { notFound } from "next/navigation";

import { NewsFigure } from "@/app/_components/global/NewsFigure";
import { H2, H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findPosts } from "@/utils/database/post.query";
import { PaginatedResult } from "@/utils/paginator";

import PageNav from "./parts/PageNav";

export default async function News({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let page = parseInt(searchParams.page ?? "1");
  const paginatedPosts = (await findPosts(
    { published: true },
    page,
  )) as PaginatedResult<PostWithTagsAndUser>;

  if (page > paginatedPosts.meta.lastPage || page < 0) page = 0;

  return (
    <SectionWrapper id="News">
      <div className="mb-[92px]">
        <H4 className="mb-[54px] text-wrap block sm:hidden">
          Berita Terbaru Organisasi dan Sub Organ Moklet
        </H4>
        <H2 className="text-wrap mb-[54px] hidden w-full xl:text-nowrap sm:block">
          Berita Terbaru Organisasi dan Sub Organ Moklet
        </H2>

        <div className="w-full flex flex-wrap gap-y-[62px] gap-1 justify-between">
          {paginatedPosts.data.length !== 0 ? (
            paginatedPosts.data.map((post) => (
              <NewsFigure post={post} key={post.id} />
            ))
          ) : (
            <P>Belum ada berita apa-apa, nih...</P>
          )}
        </div>
      </div>
      {paginatedPosts.data.length !== 0 && (
        <PageNav
          currentPage={paginatedPosts.meta.currentPage}
          totalPage={paginatedPosts.meta.lastPage}
        />
      )}
    </SectionWrapper>
  );
}
