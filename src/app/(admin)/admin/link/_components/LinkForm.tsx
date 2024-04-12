"use client";

import { TextField } from "@/app/_components/global/Input";
import { useRef, useState } from "react";
import { toast } from "sonner";
import FormButton from "./part/SubmitButton";
import { addLink } from "../action";
import { H4 } from "@/app/_components/global/Text";

export default function LinkForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [password, setPassword] = useState(false);
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
      <form ref={ref} action={create} className="py-4">
        <div className="gap-3 w-full p-6 bg-white rounded-lg">
          <H4>Buat URL</H4>
          <div className="w-[80%] flex-col flex gap-3">
            <TextField
              type="text"
              label="Target Link"
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
      </form>
    </>
  );
}
