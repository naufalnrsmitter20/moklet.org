"use client";

import { useState } from "react";

import { Button } from "@/app/_components/global/Button";
import { H2, P } from "@/app/_components/global/Text";

import { PlusIcon } from "./Icons";
import ModalCreate from "./ModalCreate";

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
          <Button
            variant={"primary"}
            className="w-full flex justify-center mt-8 lg:mt-0"
            onClick={() => setIsOpenModal(true)}
          >
            <div className="flex items-center">
              <PlusIcon />
              Create Link
            </div>
          </Button>
        </div>
      </div>
      {isOpenModal && <ModalCreate setIsOpenModal={setIsOpenModal} />}
    </>
  );
}
