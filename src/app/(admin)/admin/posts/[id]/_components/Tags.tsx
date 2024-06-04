"use client";

import { Roles, Tag } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";

import { TagWithPostCount } from "@/types/entityRelations";

/*
interface SelectTag {
  value: string;
  label: string;
}
 */

export default function Tags({
  tags,
  setState,
  selected,
  role,
}: {
  tags: TagWithPostCount[];
  setState: Dispatch<
    SetStateAction<MultiValue<{ value: string; label: string }>>
  >;
  selected: MultiValue<{ value: string; label: string }>;
  role: Roles;
}) {
  const options = tags.map((option: Tag) => ({
    value: option.tagName,
    label: option.tagName,
  }));

  /* const onChange = (
    newValue: OnChangeValue<SelectTag, true>,
    actionMeta: ActionMeta<SelectTag>,
  ) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.value === role.toString()) {
          return;
        }
        break;
      case "clear":
        newValue = tags
          .filter((v) => v.tagName === role.toString())
          .map((tag) => ({ value: tag.tagName, label: tag.tagName }));
        break;
    }

  setState(
      newValue
        .filter((v) => v.value === role.toString())
        .concat(newValue.filter((v) => v.value !== role.toString())),
    );
  };
  */

  return (
    <div>
      <label
        htmlFor={"tags"}
        className={
          "first-letter:capitalize after:text-red-500 after:content-['*']"
        }
      >
        Tags
      </label>
      <CreatableSelect
        isMulti
        unstyled
        options={options}
        isClearable={options.some((v) => v.value !== role)}
        onChange={(e) => setState(e)}
        value={selected}
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
      />
    </div>
  );
}
