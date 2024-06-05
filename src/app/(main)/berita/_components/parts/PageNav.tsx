import { notFound } from "next/navigation";

import ArrowLeft from "@/app/(main)/berita/_components/icons/ArrowLeft";
import ArrowRight from "@/app/(main)/berita/_components/icons/ArrowRight";
import PrimaryLinkButton from "@/app/(main)/berita/_components/parts/Button";
import { P } from "@/app/_components/global/Text";

export default function PageNav({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  if (currentPage > totalPage) return notFound();
  return (
    <div className="flex gap-[34px] justify-center items-center">
      <PrimaryLinkButton
        href={`/berita?page=${currentPage <= 1 ? currentPage : currentPage - 1}`}
      >
        <ArrowLeft />
      </PrimaryLinkButton>
      <div className="flex gap-[34px]">
        <div className="flex flex-col items-center">
          <P className="text-base text-black">
            Page {currentPage} of {totalPage}
          </P>
        </div>
      </div>
      <PrimaryLinkButton
        href={`/berita?page=${currentPage >= totalPage ? currentPage : currentPage + 1}`}
      >
        <ArrowRight />
      </PrimaryLinkButton>
    </div>
  );
}
