import { findForm } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";
import { notFound, redirect } from "next/navigation";
import { H2, H4, P } from "@/app/_components/global/Text";
import { TextField, SelectField } from "@/app/_components/global/Input";
import { convertToDateTimeLocalString } from "@/utils/atomics";
import { PrimaryButton } from "@/app/_components/global/Button";
import { Field_Type } from "@prisma/client";
import { FaTrash } from "react-icons/fa";
import FormEditContent from "../_components/FormEditContent";

export default async function FormEdit({ params }: { params: { id: string } }) {
  const { id } = params;
  const session = await nextGetServerSession();
  const { user } = session!;

  const form = await findForm({ id });

  if (!form) return notFound();
  if (user?.role != "SuperAdmin" && form.user_id != user?.id)
    return redirect("/unauthorized");

  return (
    <>
      <H2>Edit Formulir</H2>
      <div className="py-2 flex flex-col gap-4">
        <FormEditContent form={form} />
      </div>
    </>
  );
}
