"use client";

import { FaShareAlt } from "react-icons/fa";

export default function ShareButton({ shareData }: { shareData: ShareData }) {
  return (
    <button
      className="flex items-center gap-2 text-neutral-500"
      onClick={async () => {
        await navigator.share(shareData);
      }}
    >
      <FaShareAlt className="" /> Share
    </button>
  );
}
