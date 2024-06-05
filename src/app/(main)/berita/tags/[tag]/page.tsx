import { NewsFigure } from "@/app/_components/global/NewsFigure";
import { H2 } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findPostByTag } from "@/utils/database/tag.query";

export default async function Tag({ params }: { params: { tag: string } }) {
  const filteredPost = await findPostByTag(params.tag, true);

  return (
    <SmallSectionWrapper id="tag">
      <div>
        <H2 className="mb-[54px]">Post dengan tag &quot;{params.tag}&quot;</H2>
        <div className="flex flex-wrap gap-x-[36px] gap-y-[62px]">
          {filteredPost?.map((post) => (
            <NewsFigure post={post as PostWithTagsAndUser} key={post.id} />
          ))}
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
