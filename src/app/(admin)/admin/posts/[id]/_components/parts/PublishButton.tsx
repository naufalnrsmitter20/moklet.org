"use client";

import { useState } from "react";

import { updatePostStatus } from "@/actions/post";
import { PrimaryButton } from "@/app/_components/global/Button";

export default function PublishButton({
  state,
  id,
}: {
  state: boolean;
  id: string;
}) {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <PrimaryButton
      className={isDisabled ? "bg-neutral-500" : ""}
      isDisabled={isDisabled}
      onClick={async () => {
        setDisabled(true);
        await updatePostStatus(state, id);
        setTimeout(() => {
          setDisabled(false);
        }, 3000);
      }}
    >
      {isDisabled ? "Loading..." : `${state ? "Unpublish" : "Publish"}`}
    </PrimaryButton>
  );
}
