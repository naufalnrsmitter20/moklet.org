"use client";

import { TextField } from "@/app/_components/global/Input";
import { useRef, useState } from "react";
import { toast } from "sonner";
import FormButton from "./part/SubmitButton";
import { addLink } from "../action";
import { H2, P } from "@/app/_components/global/Text";
import { PrimaryButton } from "@/app/_components/global/Button";
import ModalCreate from "./ModalCreate";

export default function LinkForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [password, setPassword] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  async function create(formdata: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await addLink(formdata);
    if (!result.error) {
      toast.success(result.message, { id: toastId });
      ref.current?.reset();
    }
    toast.error(result.message, { id: toastId });
  }
  return (
    <>
      <div className="flex justify-between">
        <div>
          <H2 className="font-semibold ">URL Shortener</H2>
          <P>Make your link more profesional</P>
        </div>
        <div>
          <PrimaryButton onClick={() => setIsOpenModal(true)}>
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18V6"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Create Link
            </div>
          </PrimaryButton>
        </div>
      </div>
      {isOpenModal && <ModalCreate setIsOpenModal={setIsOpenModal} />}
      {/* <form ref={ref} action={create} className="py-4">
        <div className="gap-3 w-full p-6 bg-white rounded-lg">
          <H4>Buat URL</H4>
          <div className="w-[80%] flex-col flex gap-3">
            <TextField
              type="text"
              label="Destination"
              name="destLink"
              placeholder="https://example.com/thisisaverylongstringthatyouwouldliketoshorten"
              required={true}
            />
            <TextField
              type="text"
              label="Short URL"
              name="slug"
              placeholder="MokletHebat"
            />
            {password && (
              <TextField
                type="password"
                label="Password"
                placeholder="*******"
                name="password"
              />
            )}
            <span className="flex gap-1">
              <input
                id="password"
                type="checkbox"
                className="p-2 text-primary-500 accent-primary-500  transition-all"
                onChange={() => setPassword(!password)}
              />
              <label htmlFor="password">URL Pribadi</label>
            </span>
          </div>
          <div className="flex w-full justify-end items-center">
            <FormButton />
          </div>
        </div>
      </form> */}
    </>
  );
}
