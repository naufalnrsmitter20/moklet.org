"use client";

import { PrimaryButton } from "@/app/_components/global/Button";
import { updatePostStatus } from "../../../action";
import { useState } from "react";

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
