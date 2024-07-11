/* eslint-disable */
"use client";

import MDEditor, {
  commands,
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
  TextAreaTextApi,
} from "@uiw/react-md-editor";
import { ChangeEvent, useRef } from "react";
import { FaFileImage } from "react-icons/fa";
import { toast } from "sonner";

export default function Editor({
  value,
  onChange,
}: {
  value: string;
  onChange: (
    value?: string | undefined,
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
  ) => void;
}) {
  const insertImageRef = useRef<HTMLInputElement>(null);

  const insertImage: commands.ICommand = {
    name: "Insert image",
    keyCommand: "Insert upload",
    buttonProps: { "aria-label": "Insert an image" },
    icon: <FaFileImage />,
    execute: async (_, api: TextAreaTextApi) => {
      if (insertImageRef.current) {
        const toastId = toast.loading("Uploading image...");
        const result = await getImage();
        if (!result) return toast.error("Failed to load image");

        const data = new FormData();

        data.append("file", result!);

        const upload = await fetch("/api/upload/image", {
          method: "POST",
          body: data,
        }).then((res) => res.json());

        if (upload.status != 201) {
          toast.error("Failed upload image", { id: toastId });
        } else {
          const modifyText = `![user image](${upload.data?.url})\n`;
          api.replaceSelection(modifyText);
          toast.success("Success upload image", { id: toastId });
        }
        insertImageRef!.current!.value = "";
      }
    },
  };

  function getImage(): Promise<File | null | undefined> {
    return new Promise((resolve, reject) => {
      if (insertImageRef.current) {
        insertImageRef.current.onchange = () => {
          try {
            if (!confirm("Upload this image?")) {
              insertImageRef!.current!.value = "";
              return;
            }
            resolve(insertImageRef.current?.files?.[0]!);
          } catch (e) {
            reject(e);
          }
        };
        insertImageRef.current?.click();
      }
    });
  }

  return (
    <>
      <div data-color-mode="light">
        <label>Text Editor</label>
        <input
          type="file"
          hidden
          name="insertImage"
          ref={insertImageRef}
          accept="image/gif,image/jpeg,image/jpg,image/png,image/webp,image/svg"
        />
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
            insertImage,
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
