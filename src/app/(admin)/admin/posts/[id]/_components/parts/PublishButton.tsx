"use client";

import { useState } from "react";
import { useRouter } from "next-nprogress-bar";

import { updatePostStatus } from "@/actions/post";
import { Button } from "@/app/_components/global/Button";
import cn from "@/lib/clsx";

export default function PublishButton({
  state,
  id,
}: Readonly<{
  state: boolean;
  id: string;
}>) {
  const [isDisabled, setDisabled] = useState(false);
  const [published, setPublished] = useState(state);
  const router = useRouter();

  return (
    <Button
      variant={"primary"}
      className={cn(
        isDisabled ? "bg-neutral-500" : "",
        published ? "" : "bg-green-600 hover:bg-green-500",
      )}
      isDisabled={isDisabled}
      onClick={async () => {
        setDisabled(true);
        await updatePostStatus(state, id);
        setDisabled(false);
        setPublished(!published);
        router.refresh();
      }}
    >
      {isDisabled ? "Loading..." : published ? "Unpublish" : "Publish"}
    </Button>
  );
}
