import { H2 } from "@/app/_components/global/Text";
import { FormWithSubmissions } from "@/types/entityRelations";
import { findFormWithSubmission } from "@/utils/database/form.query";
import { notFound } from "next/navigation";
import ResponsesTable from "./_components/Table";

export default async function FormResponses({
  params,
}: {
  params: { id: string };
}) {
  const form = (await findFormWithSubmission({
    id: params.id,
  })) as FormWithSubmissions;

  if (!form) return notFound();

  return (
    <>
      <div className="mb-5">
        <H2 className="font-semibold">
          {form.submissions.length} respon untuk{" "}
          <span className="text-primary-500">{form.title}</span>
        </H2>
      </div>
      <ResponsesTable data={form.submissions} formId={params.id} />
    </>
  );
}
