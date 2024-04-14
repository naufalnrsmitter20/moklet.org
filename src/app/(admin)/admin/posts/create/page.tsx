"use server";
import { findAllTags } from "@/utils/database/tag.query";
import PostForm from "./_components/Form";
import Tags from "./_components/Tags";
import { TagWithPostCount } from "@/types/entityRelations";

export default async function CreatePost() {
  const tags = (await findAllTags()) as TagWithPostCount[];
  return (
    <div>
      <PostForm tags={tags} />
    </div>
  );
}
