import { FullPrimaryLinkButton } from "@/app/_components/global/LinkButton";
import { nextGetServerSession } from "@/lib/next-auth";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findAllPosts } from "@/utils/database/post.query";
import { FaPlus } from "react-icons/fa6";
import PostTable from "./_components/Table";
import { H2, P } from "@/app/_components/global/Text";

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
      <div className="flex items-center justify-between mb-5">
        <div>
          <H2 className="font-semibold">Posts Blog </H2>
          <P>Share your organ activity, event, or promotion </P>
        </div>
        <div>
          <FullPrimaryLinkButton href="/admin/form/new">
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Create Post
            </div>
          </FullPrimaryLinkButton>
        </div>
      </div>
      <div>
        <PostTable data={posts} />
      </div>
    </div>
  );
}
