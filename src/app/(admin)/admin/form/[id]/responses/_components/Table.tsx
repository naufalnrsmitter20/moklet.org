"use client";

import { SubmissionWithUserAndFields } from "@/types/entityRelations";
import { stringifyDate } from "@/utils/atomics";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function ResponsesTable({
  data,
  formId,
}: {
  data: SubmissionWithUserAndFields[];
  formId: string;
}) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const columns = [
    {
      name: "Respondent",
      selector: (row: SubmissionWithUserAndFields) => row.user.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: SubmissionWithUserAndFields) => row.user.email,
      sortable: true,
    },
    {
      name: "Submitted at",
      selector: (row: SubmissionWithUserAndFields) =>
        stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Re-submit",
      selector: (row: SubmissionWithUserAndFields) =>
        row.updated_at.getTime() === row.created_at.getTime()
          ? "No re-submission"
          : stringifyDate(row.updated_at),
      sortable: true,
    },
  ];

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) return <div>Loading</div>;

  return (
    <div className="p-2 rounded-md bg-white">
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        customStyles={{
          cells: {
            style: {
              "&:hover": {
                cursor: "pointer",
              },
            },
          },
        }}
        onRowClicked={(row: SubmissionWithUserAndFields) =>
          router.push(`/admin/form/${formId}/responses/${row.id}`)
        }
      />
    </div>
  );
}
