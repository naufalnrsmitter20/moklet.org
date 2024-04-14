"use client";

import MDEditor, {
  ContextStore,
  commands,
  TextState,
  TextAreaTextApi,
  bold,
  italic,
  strikethrough,
  title,
  divider,
  link,
  quote,
  code,
  hr,
  codeBlock,
  comment,
  table,
  unorderedListCommand,
  orderedListCommand,
  checkedListCommand,
} from "@uiw/react-md-editor";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import Modal from "./ImageModal";

export default function Editor({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: {
  value: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onChange: (
    value?: string | undefined,
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
  ) => void;
}) {
  const upImage = {
    name: "Upload image",
    keyCommand: "Image upload",
    buttonProps: { "aria-label": "Upload an image" },
    icon: <FaFileImage />,
    execute: (state: TextState, api: TextAreaTextApi) => {
      setIsOpen(!isOpen);
    },
  };

  return (
    <>
      <div data-color-mode="light">
        <label>Text Editor</label>
        <MDEditor
          value={value}
          onChange={onChange}
          className=""
          height={600}
          style={{
            backgroundColor: "#fff",
            color: "#000",
            fontFamily: "inherit",
            padding: 0,
          }}
          commands={[
            bold,
            italic,
            strikethrough,
            hr,
            title,
            divider,
            link,
            quote,
            code,
            codeBlock,
            comment,
            upImage,
            table,
            divider,
            unorderedListCommand,
            orderedListCommand,
            checkedListCommand,
          ]}
        />
      </div>
    </>
  );
}
