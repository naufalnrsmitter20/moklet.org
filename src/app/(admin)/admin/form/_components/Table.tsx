"use client";
import { FormWithFieldsAndUser } from "@/types/entityRelations";
import DataTable, { TableColumn } from "react-data-table-component";
import { stringifyDate } from "@/utils/atomics";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LinkTable({ data }: { data: FormWithFieldsAndUser[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  var now = new Date().getTime();
  const columns: TableColumn<FormWithFieldsAndUser>[] = [
    {
      name: "Title",
      selector: (row: FormWithFieldsAndUser) => row.title,
      sortable: true,
    },
    {
      name: "Created by",
      selector: (row: FormWithFieldsAndUser) => row.user.name,
      sortable: true,
    },
    {
      name: "Created at",
      selector: (row: FormWithFieldsAndUser) => stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Updated at",
      selector: (row: FormWithFieldsAndUser) => stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Total Responden",
      selector: (row: FormWithFieldsAndUser) => row._count.submissions,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: FormWithFieldsAndUser) =>
        row.is_open &&
        (!row.open_at || new Date(row.open_at).getTime() < now) &&
        (!row.close_at || new Date(row.close_at).getTime() > now) ? (
          <span className="p-2 bg-green-600 rounded-md text-white">Open</span>
        ) : (
          <span className="p-2 bg-red-600 rounded-md text-white">Close</span>
        ),
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
        onRowClicked={(row: FormWithFieldsAndUser) =>
          router.push(`/admin/form/${row.id}`)
        }
      />
    </div>
  );
}
