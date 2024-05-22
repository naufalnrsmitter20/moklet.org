import { H1, H2, P } from "@/app/_components/global/Text";
import Table from "./_components/Table";
import { findFormsWithUser } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";
import PrimaryLinkButton from "@/app/_components/global/LinkButton";

export default async function Forms() {
  const session = await nextGetServerSession();
  const { user } = session!;

  const forms = await findFormsWithUser({
    user_id: user?.role == "SuperAdmin" ? undefined : user?.id,
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <H2 className="font-semibold ">Formulir </H2>
          <P>Easily create online surveys, forms, quizzes </P>
        </div>
        <PrimaryLinkButton href="/admin/form/new">
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
            Create Form
          </div>
        </PrimaryLinkButton>
      </div>
      <Table data={forms} />
    </>
  );
}
