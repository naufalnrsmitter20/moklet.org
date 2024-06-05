"use client";

import { useState } from "react";

import { updatePostStatus } from "@/actions/post";
import { Button } from "@/app/_components/global/Button";

export default function PublishButton({
  state,
  id,
}: {
  state: boolean;
  id: string;
}) {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <Button
      variant={"primary"}
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
    </Button>
  );
}
