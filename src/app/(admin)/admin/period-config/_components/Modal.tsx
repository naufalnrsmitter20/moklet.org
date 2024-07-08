import { Period_Year } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";

import { TextField, SelectField } from "@/app/_components/global/Input";
import { H3, P } from "@/app/_components/global/Text";

import FormButton from "./part/SubmitButton";
import { upsertPeriod } from "@/actions/periodConfig";

export default function Modal({
  setIsOpenModal,
  data,
}: {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  data?: Period_Year | null;
}) {
  async function update(formdata: FormData) {
    const toastId = toast.loading("Loading...");
    const result = await upsertPeriod(data?.id as string, formdata);
    if (!result.error) {
      toast.success(result.message, { id: toastId });
      setIsOpenModal(false);
    } else toast.error(result.message, { id: toastId });
  }
  return (
    <div className="bg-gray-300/50 fixed w-full lg:w-[calc(100%-20rem)] z-10 justify-center items-center top-0 right-0 h-full m-auto">
      <div className="relative p-4 w-full h-full max-w-2xl max-h-full m-auto top-20">
        <div className="relative bg-white rounded-lg">
          <form action={update}>
            <div className="flex items-center justify-between p-4 md:p-5 border-b">
              <H3>Period Data</H3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
                onClick={() => setIsOpenModal(false)}
              >
                <FaX size={16} />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <TextField
                type="text"
                name="period"
                required
                value={data?.period}
                label="Masa Bakti"
                placeholder="2022-2023"
              />
              <P>*Perhatikan format penulisan</P>
              <SelectField
                name="is_active"
                options={[
                  { label: "No", value: "false" },
                  { label: "Yes", value: "true" },
                ]}
                required
                value={data?.is_active.toString()}
                label="Sedang aktif"
              />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
              <FormButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
