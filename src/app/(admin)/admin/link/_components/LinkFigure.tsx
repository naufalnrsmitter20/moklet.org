"use client";

import { H3, P } from "@/app/_components/global/Text";
import { LinkWithCountAndUser } from "@/types/entityRelations";
import {
  FaChartBar,
  FaRegCalendarDays,
  FaPencil,
  FaRegTrashCan,
} from "react-icons/fa6";
import { stringifyDate } from "@/utils/atomics";
import { FaGlobeAsia, FaUser, FaRegCopy } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

export default function LinkFigure({ link }: { link: LinkWithCountAndUser }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function copyToClipboard() {
    navigator.clipboard.writeText("go.moklet.org/" + link.slug);

    alert("Link berhasil disalin!");
  }
  return (
    <figure className="flex justify-between w-full bg-white rounded-xl px-6 py-4">
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-start">
          <span className="p-2   rounded-full bg-slate-100">
            <FaGlobeAsia className="text-3xl" />
          </span>
          <div className="text-wrap">
            <H3>
              <span
                onClick={() => copyToClipboard()}
                className="text-primary-400 hover:text-primary-200 hover:cursor-pointer transition-all duration-500 cursor-pointer"
              >
                {"go.moklet.org/" + link.slug}
              </span>
            </H3>
            <P>{link.target_url}</P>
            <div className="pt-2 flex gap-4">
              <span className="flex gap-1 items-center">
                <FaChartBar />
                <P>{link.count?.click_count}</P>
              </span>
              <span className="flex gap-1 items-center">
                <FaRegCalendarDays />
                <P>{stringifyDate(link.created_at)}</P>
              </span>
              <span className="flex gap-1 items-center">
                <FaUser />
                <P>{link.user.name}</P>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => copyToClipboard()}
          className="group border border-primary-400 px-6 py-3 rounded-xl hover:bg-primary-400 transition-all duration-500"
        >
          <span className="flex items-center gap-2 text-primary-400 group-hover:text-white transition-all duration-500">
            <FaRegCopy />
            <P className="text-lg font-bold text-primary-400 group-hover:text-white transition-all duration-500">
              Copy
            </P>
          </span>
        </button>
        <button
          onClick={() => {}}
          className="group border border-primary-400 px-4 py-4 rounded-xl hover:bg-primary-400 transition-all duration-500"
        >
          <span className="flex items-center gap-2 text-primary-400 group-hover:text-white transition-all duration-500">
            <FaPencil />
          </span>
        </button>
        <button
          onClick={() => {}}
          className="group border border-primary-400 px-4 py-4 rounded-xl hover:bg-primary-400 transition-all duration-500"
        >
          <span className="flex items-center gap-2 text-primary-400 group-hover:text-white transition-all duration-500">
            <FaRegTrashCan />
          </span>
        </button>
      </div>
    </figure>
  );
}
