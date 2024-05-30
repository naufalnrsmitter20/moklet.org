"use client";

import { TagWithPostCount } from "@/types/entityRelations";
import { Prisma, Tag } from "@prisma/client";
import { createTag } from "@/app/actions/post";
import CreatableSelect from "react-select/creatable";
import Option from "react-select/creatable";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";
import { MultiValue } from "react-select";

export default function Tags({
  tags,
  setState,
}: {
  tags: TagWithPostCount[];
  setState: Dispatch<
    SetStateAction<MultiValue<{ value: string; label: string }> | undefined>
  >;
}) {
  const options = tags.map((option: Tag) => ({
    value: option.tagName,
    label: option.tagName,
  }));

  return (
    <div>
      <label
        htmlFor={"tags"}
        className={`first-letter:capitalize after:text-red-500 after:content-['*']`}
      >
        Tags
      </label>
      <CreatableSelect
        isMulti
        unstyled
        options={options}
        onChange={(e) => setState(e)}
        name="tags"
        required
        classNames={{
          control: () =>
            "rounded-xl border border-neutral-400 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 bg-white focus:outline-none transition-all duration-500",
          menu: () =>
            "bg-white rounded-lg px-[18px] py-[14px] border border-neutral-400",
          multiValue: () => "bg-primary-400 px-4 py-2 text-white rounded-2xl",
          valueContainer: () => "flex gap-2",
          menuList: () => "text-base flex flex-col gap-1",
          option: () =>
            "hover:bg-neutral-300 hover:cursor-pointer transition-all duration-500 rounded-lg p-2",
        }}
        onCreateOption={async (inputValue: string) => {
          const toastId = toast.loading("Membuat Tag....");
          const result = await createTag(inputValue);
          if (result.error) {
            return toast.error(result.message, { id: toastId });
          }
          toast.success(result.message, { id: toastId });
        }}
      />
    </div>
  );
}
