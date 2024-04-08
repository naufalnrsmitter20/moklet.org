"use client";

import randomSlug from "@/utils/randomSlug";
import { TextArea, TextField } from "@/app/_components/global/Input";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import FormButton from "./part/SubmitButton";
import { P } from "@/app/_components/global/Text";
import { CheckboxField } from "@/app/_components/global/Input";

import { addLink } from "../action";

export default function LinkForm() {
  //type mu eror itu di page
  const ref = useRef<HTMLFormElement>(null);
  const [password, setPassword] = useState(false);

  return (
    <>
      <form
        ref={ref}
        action={async (formdata) => {
          const result = await addLink(formdata);
          if (!result.error) {
            toast.success(result.message);
            ref.current?.reset();
          }
          toast.error(result.message);
        }}
        className=""
      >
        <div className="flex gap-3  w-[500px]">
          <div className="w-[80%] flex-col flex gap-3">
            <TextField
              type="text"
              label="Shorten Link"
              name="destLink"
              placeholder="https://example.com/thisisaverylongstringthatyouwouldliketoshorten"
              required={true}
            />
            <TextField
              type="text"
              label="slug"
              name="slug"
              placeholder="MokletHebat"
            />
            <span className="flex gap-1">
              <input type="checkbox" onChange={() => setPassword(!password)} />
              <P>Password</P>
            </span>
          </div>
          {password && (
            <TextField
              type="password"
              label="Password"
              placeholder="*******"
              name="password"
            />
          )}
          <div className="flex w-fit justify-start items-center">
            <FormButton />
          </div>
        </div>
      </form>
    </>
  );
}
