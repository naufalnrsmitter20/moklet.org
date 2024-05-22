"use client";

import { useState } from "react";
import { H2, P } from "@/app/_components/global/Text";
import { PrimaryButton } from "@/app/_components/global/Button";
import ModalCreate from "./ModalCreate";
import { PlusIcon } from "./Icons";

export default function LinkForm() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          <H2 className="font-semibold ">URL Shortener</H2>
          <P>Make your link more profesional</P>
        </div>
        <div>
          <PrimaryButton
            className="w-full flex justify-center mt-8 lg:mt-0"
            onClick={() => setIsOpenModal(true)}
          >
            <div className="flex items-center">
              <PlusIcon />
              Create Link
            </div>
          </PrimaryButton>
        </div>
      </div>
      {isOpenModal && <ModalCreate setIsOpenModal={setIsOpenModal} />}
    </>
  );
}
