"use client";
import { useRouter } from "next-nprogress-bar";

import { Button } from "@/app/_components/global/Button";

import ArrowLeft from "../../_components/icons/ArrowLeft";

export default function GoBack() {
  const router = useRouter();

  return (
    <Button
      variant={"primary"}
      className="w-[50px] h-[50px] justify-center flex items-center p-[13px]"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft />
    </Button>
  );
}
