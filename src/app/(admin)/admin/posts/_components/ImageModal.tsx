import { Dispatch, SetStateAction } from "react";
import { FaX } from "react-icons/fa6";

import { H3 } from "@/app/_components/global/Text";

import Form from "./parts/ImageForm";

export default function Modal({
  setIsOpenModal,
}: {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={
        "bg-gray-300/50 fixed w-[calc(100%-20rem)] z-10 justify-center items-center top-0 right-0 h-[calc(100%-1rem)] m-auto transition-all duration-500"
      }
    >
      <div className="relative p-4 w-full h-full max-w-2xl max-h-full m-auto top-20">
        <div className="relative bg-white rounded-lg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b">
            <H3>Upload gambar</H3>
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
              onClick={() => setIsOpenModal(false)}
            >
              <FaX size={25} />
            </button>
          </div>
          <Form setIsOpenModal={setIsOpenModal} />
        </div>
      </div>
    </div>
  );
}
