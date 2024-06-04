"use client";
import { useRouter } from "next-nprogress-bar";

import ArrowLeft from "../../_components/icons/ArrowLeft";
import { BackButton } from "../../_components/parts/Button";

export default function GoBack() {
  const router = useRouter();

  return (
    <BackButton
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft />
    </BackButton>
  );
}
