"use client";

import { H3, P } from "@/app/_components/global/Text";
import { LinkWithCountAndUser } from "@/types/entityRelations";
import { stringifyDate } from "@/utils/atomics";
import { FaGlobeAsia } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import { toast } from "sonner";
import { deleteLink } from "../action";
import {
  CopyIcon,
  DateIcon,
  DeleteIcon,
  EditIcon,
  StatsIcon,
  UserIcon,
} from "./Icons";

export default function LinkFigure({ link }: { link: LinkWithCountAndUser }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");
  function copyToClipboard() {
    navigator.clipboard.writeText("go.moklet.org/" + link.slug);
    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy");
    }, 4000);
  }

  async function deleteAction(slug: string) {
    if (!confirm("Anda yakin ingin menghapus item ini?")) return;
    const toastId = toast.loading("Loading...");
    const result = await deleteLink(slug);
    if (!result.error) toast.success(result.message, { id: toastId });
    toast.error(result.message, { id: toastId });
  }
  return (
    <figure className="lg:flex justify-between w-full bg-white rounded-xl px-6 py-4">
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} link={link} />}
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-start">
          <span className="p-2  lg:inline-block hidden rounded-full border">
            <FaGlobeAsia className="text-3xl text-gray-400" />
          </span>
          <div className="text-wrap">
            <H3>
              <span
                onClick={() => copyToClipboard()}
                className="text-black hover:text-gray-8 font-semibold hover:cursor-pointer transition-all duration-500 cursor-pointer"
              >
                {"go.moklet.org/" + link.slug}
              </span>
            </H3>
            <P>{link.target_url}</P>
            <div className="pt-5 flex gap-4 ">
              <span className="flex gap-1 items-center ">
                <StatsIcon />

                <P>{link.count?.click_count}</P>
              </span>
              <span className="flex gap-1 items-center">
                <DateIcon />

                <P>{stringifyDate(link.created_at)}</P>
              </span>
              <span className="flex gap-1 items-center">
                <UserIcon />

                <P>{link.user.name}</P>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:pt-1 pt-5">
        <button
          onClick={() => copyToClipboard()}
          className="group border border-primary-400 px-6 py-3 rounded-xl hover:bg-primary-400/50 transition-all duration-500"
        >
          <span className="flex items-center gap-2 transition-all duration-500">
            <CopyIcon />
            <P className="text-lg font-semibold text-primary-400  transition-all duration-500">
              {buttonText}
            </P>
          </span>
        </button>
        <button
          onClick={() => setIsOpenModal(true)}
          className="group border border-gray-400 px-3 py-3 rounded-xl hover:bg-gray-100 transition-all duration-500"
        >
          <span className="flex items-center gap-2 transition-all duration-500">
            <EditIcon />
          </span>
        </button>
        <button
          onClick={() => deleteAction(link.slug)}
          className="group border border-gray-400 px-3 py-3 rounded-xl hover:bg-gray-100 transition-all duration-500"
        >
          <span className="flex items-center gap-2 transition-all duration-500">
            <DeleteIcon />
          </span>
        </button>
      </div>
    </figure>
  );
}
