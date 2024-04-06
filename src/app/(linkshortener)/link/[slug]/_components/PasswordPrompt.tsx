"use client";

import { FullPrimaryButton } from "@/app/_components/global/Button";
import { TextField } from "@/app/_components/global/Input";
import { H3, P } from "@/app/_components/global/Text";
import checkPass from "../action";
import { useState } from "react";
import { FaLock } from "react-icons/fa6";

export default function PasswordPrompt({ slug }: { slug: string }) {
  const [error, setError] = useState("");

  return (
    <>
      <figure className="flex items-center justify-center flex-col h-[70vh]">
        <div className="border border-neutral-300 px-3 py-3 rounded-lg justify-center items-center flex flex-col w-[85%] md:w-[50%] h-[70%]">
          <div className="w-[80%]">
            <div className="flex flex-col items-start gap-3">
              <FaLock color="#E04E4E" className="text-4xl" />
              <div>
                <H3>Private URL</H3>
                <P className="text-wrap">
                  Masukkan kata sandi untuk melanjutkan
                </P>
              </div>
            </div>
            <form
              action={async (data) => {
                const result = await checkPass(data, slug);
                if (result?.message) {
                  setError(result?.message);
                }
              }}
              className="flex flex-col items-start w-full"
            >
              <TextField
                className={`${error ? "pb-0" : "pb-3"} pt-3 w-full`}
                type="password"
                name="password"
                placeholder="***********"
              />
              {error && <P className="text-primary-300 py-2">{error}</P>}
              <FullPrimaryButton type="submit">Lanjutkan</FullPrimaryButton>
            </form>
          </div>
        </div>
      </figure>
    </>
  );
}
