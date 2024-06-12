"use client";

import { Roles } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MultiValue } from "react-select";
import { toast } from "sonner";

import { postUpdate } from "@/actions/post";
import Image from "@/app/_components/global/Image";
import { TextArea, TextField } from "@/app/_components/global/Input";
import { PostWithTagsAndUser, TagWithPostCount } from "@/types/entityRelations";

import Editor from "../../_components/MdEditor";
import FormButton from "../../_components/parts/SubmitButton";

import Tags from "./Tags";

export default function EditForm({
  tags,
  post,
}: {
  tags: TagWithPostCount[];
  post: PostWithTagsAndUser;
}) {
  const [value, setValue] = useState(post.content);
  const [image, setImage] = useState(post.thumbnail);
  const [slug, setSlug] = useState(post.slug);
  const { data: session } = useSession();
  const selected = post.tags.map((tag) => ({
    value: tag.tagName,
    label: tag.tagName,
  }));
  const [tag, setTag] = useState<MultiValue<{ value: string; label: string }>>(
    [],
  );

  useEffect(() => {
    if (
      selected.map((i) => i.value).indexOf(post.user.role.toString()!) === -1 &&
      !(session?.user?.role === "Admin" || session?.user?.role === "SuperAdmin")
    ) {
      selected.unshift({
        label: post.user.role.toString()!,
        value: post.user.role.toString()!,
      });
    }
    setTag(selected);
  }, [post.user.role, selected, session?.user?.role]);

  return (
    <>
      <form
        action={async (data) => {
          const toastId = toast.loading("Loading...");
          const result = await postUpdate(data, value, tag!, post.id);
          if (result.error) {
            return toast.error(result.message, { id: toastId });
          }
          toast.success(result.message, { id: toastId });
        }}
        className="flex flex-col gap-y-3"
      >
        <TextField
          type="text"
          label="Judul Post"
          name="title"
          required={true}
          handleChange={(e) => {
            const splitString = e.currentTarget.value
              .replace(/[^a-zA-Z0-9   ]/g, "")
              .toLowerCase()
              .split(" ");
            const slug = splitString.join("-");
            setSlug(slug);
          }}
          value={post.title}
        />
        <TextArea
          label="Deskripsi"
          name="desc"
          placeholder="berita tentang bblaballala"
          value={post.description}
          required
        />
        <TextField
          type="text"
          label="Custom Slug"
          name="slug"
          value={slug}
          placeholder="berita-paling-panas-2024"
        />
        <Tags
          tags={tags}
          setState={setTag!}
          selected={tag!}
          role={post?.user?.role as Roles}
        />
        <div className="flex flex-col">
          <label htmlFor="thumbnail" className="">
            Thumbnail
          </label>
          <Image
            className="w-[300px] h-[200px] rounded-2xl object-cover mb-2"
            width={300}
            height={200}
            alt={post.title}
            src={image}
            unoptimized
          />
          <input
            type="file"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files![0]));
            }}
            accept="image/*"
            name="thumbnail"
            className="border border-neutral-500 border-dotted rounded-xl py-5 px-3"
          />
        </div>
        <Editor
          onChange={(data) => {
            setValue(data!);
          }}
          value={value}
        />
        <FormButton />
      </form>
    </>
  );
}
