import { H1 } from "@/app/_components/global/Text";
import { findPost } from "@/utils/database/post.query";
import EditForm from "./_components/Form";
import { notFound } from "next/navigation";
import { findAllTags } from "@/utils/database/tag.query";
import { TagWithPostCount } from "@/types/entityRelations";
import PublishButton from "./_components/parts/PublishButton";

export const revalidate = 0;

export default async function Edit({ params }: { params: { id: string } }) {
  const data = await findPost({ id: params.id ?? "" });
  const Tags = (await findAllTags()) as TagWithPostCount[];

  if (data)
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <H1>Edit Post</H1>
          <PublishButton state={data.published} id={data.id} />
        </div>
        <EditForm tags={Tags} post={data!} />
      </div>
    );

  return notFound();
}
