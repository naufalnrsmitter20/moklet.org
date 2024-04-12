import { findForm } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";
import { notFound, redirect } from "next/navigation";
import { H2 } from "@/app/_components/global/Text";
import FormEditContent from "../_components/FormEditContent";
import { FormWithFields } from "@/types/entityRelations";

export default async function FormEdit({ params }: { params: { id: string } }) {
  const { id } = params;
  const session = await nextGetServerSession();
  const { user } = session!;

  let form: FormWithFields | null;
  if (id == "new") {
    let formBlankTemplate: FormWithFields = {
      allow_edit: false,
      close_at: null,
      created_at: new Date(),
      description: "",
      fields: [],
      id: "",
      is_open: true,
      open_at: null,
      submit_once: true,
      title: "Formulir Baru",
      updated_at: new Date(),
      user_id: user?.id || "",
      _count: { submissions: 0 },
    };
    form = formBlankTemplate;
  } else form = await findForm({ id });

  if (!form) return notFound();
  if (user?.role != "SuperAdmin" && form.user_id != user?.id)
    return redirect("/unauthorized");

  return (
    <>
      <H2>Edit Formulir</H2>
      <div className="py-2 flex flex-col gap-4">
        <FormEditContent form={form} isNewForm={id == "new"} />
      </div>
    </>
  );
}
