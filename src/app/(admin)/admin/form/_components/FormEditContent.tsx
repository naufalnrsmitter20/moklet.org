"use client";

import { PrimaryButton } from "@/app/_components/global/Button";
import { TextField } from "@/app/_components/global/Input";
import { FormWithFields } from "@/types/entityRelations";
import { convertToDateTimeLocalString } from "@/utils/atomics";
import QuestionEdit from "./QuestionEdit";
import { ChangeEvent, useState } from "react";

export default function FormEditContent({ form }: { form: FormWithFields }) {
  const [formData, setFormData] = useState(form);
  const [question, setQuestion] = useState(form.fields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, title: e.target.value });

  return (
    <>
      <TextField
        name="title"
        label="title"
        type="text"
        value={formData.title}
        required
        handleChange={handleChange}
      />
      <TextField
        name="description"
        label="description"
        type="text"
        value={formData.description || ""}
      />
      <div className="flex flex-col gap-2">
        <p className="text-black">Option</p>
        <div className="flex gap-x-2 cursor-pointer items-center">
          <input
            type="checkbox"
            name="is_open"
            value="true"
            defaultChecked={formData.is_open}
            className="w-5 h-5 cursor-pointer bg-white text-primary-500 accent-primary-500 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
            id="is_open"
          />
          <label htmlFor="is_open" className="cursor-pointer ms-2">
            Formulir sedang menerima jawaban
          </label>
        </div>
        <div className="flex gap-x-2 cursor-pointer items-center">
          <input
            type="checkbox"
            name="allow_edit"
            value="true"
            defaultChecked={formData.allow_edit}
            className="w-5 h-5 cursor-pointer bg-white text-primary-500 accent-primary-500 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
            id="allow_edit"
          />
          <label htmlFor="allow_edit" className="cursor-pointer ms-2">
            Jawaban dapat dirubah
          </label>
        </div>
        <div className="flex gap-x-2 cursor-pointer items-center">
          <input
            type="checkbox"
            name="submit_once"
            value="true"
            defaultChecked={formData.submit_once}
            className="w-5 h-5 cursor-pointer bg-white text-primary-500 accent-primary-500 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
            id="submit_once"
          />
          <label htmlFor="submit_once" className="cursor-pointer ms-2">
            Hanya dapat mengisi sekali
          </label>
        </div>
        <TextField
          name="open_at"
          label="Dibuka pada"
          type="datetime-local"
          value={
            (formData.open_at &&
              convertToDateTimeLocalString(formData.open_at)) ||
            ""
          }
        />
        <TextField
          name="open_at"
          label="Ditutup pada"
          type="datetime-local"
          value={
            (formData.close_at &&
              convertToDateTimeLocalString(formData.close_at)) ||
            ""
          }
        />
      </div>
      <PrimaryButton className="w-full">Simpan</PrimaryButton>
      <QuestionEdit fields={question} setField={setQuestion} formId={form.id} />
    </>
  );
}
