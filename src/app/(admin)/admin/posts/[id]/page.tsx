import { H1 } from "@/app/_components/global/Text";
import { findPost } from "@/utils/database/post.query";
import EditForm from "./_components/Form";
import { notFound, redirect } from "next/navigation";
import { findAllTags } from "@/utils/database/tag.query";
import { TagWithPostCount } from "@/types/entityRelations";
import PublishButton from "./_components/parts/PublishButton";
import { nextGetServerSession } from "@/lib/next-auth";

export const revalidate = 0;

export default async function Edit({ params }: { params: { id: string } }) {
  const session = await nextGetServerSession();
  const data = await findPost({ id: params.id ?? "" });
  if (
    !(session?.user?.role === "Admin" || session?.user?.role === "SuperAdmin")
  ) {
    if (session?.user?.role !== data?.user?.role || !session)
      return redirect("/unauthorized");
  }
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
