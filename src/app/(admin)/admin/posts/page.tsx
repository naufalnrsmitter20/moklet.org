import { FullPrimaryLinkButton } from "@/app/_components/global/LinkButton";
import { nextGetServerSession } from "@/lib/next-auth";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findAllPosts } from "@/utils/database/post.query";
import { FaPlus } from "react-icons/fa6";
import PostTable from "./_components/Table";

export default async function PostPanel({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const session = await nextGetServerSession();
  const posts = (await findAllPosts({
    user_id:
      session!.user?.role == "SuperAdmin" ? undefined : session!.user?.id,
  })) as PostWithTagsAndUser[];

  return (
    <div className="flex flex-col gap-2">
      <FullPrimaryLinkButton href="/admin/posts/create">
        <span className="flex items-center gap-1 justify-center">
          <FaPlus />
          Buat Post
        </span>
      </FullPrimaryLinkButton>

      <div>
        <PostTable data={posts} />
      </div>
    </div>
  );
}
