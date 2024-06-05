"use server";
import { TagWithPostCount } from "@/types/entityRelations";
import { findAllTags } from "@/utils/database/tag.query";

import PostForm from "./_components/Form";

export default async function CreatePost() {
  const tags = (await findAllTags()) as TagWithPostCount[];
  return (
    <div>
      <PostForm tags={tags} />
    </div>
  );
}
