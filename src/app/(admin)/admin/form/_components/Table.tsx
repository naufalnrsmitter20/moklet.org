"use client";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaRegCopy, FaRegTrashAlt, FaLink, FaComment } from "react-icons/fa";
import { toast } from "sonner";

import { cloneForm, deleteForm } from "@/actions/formAdmin";
import { FormWithFieldsAndUser } from "@/types/entityRelations";
import { stringifyDate } from "@/utils/atomics";

export default function FormTable({ data }: { data: FormWithFieldsAndUser[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const now = new Date().getTime();
  const columns: TableColumn<FormWithFieldsAndUser>[] = [
    {
      name: "Link",
      cell: (row: FormWithFieldsAndUser) => (
        <button
          onClick={() => copyToClipboard(row.id)}
          title="Copy Link"
          className="p-2 bg-slate-500 rounded-md text-white hover:bg-slate-700 transition-all"
        >
          <FaLink />
        </button>
      ),
    },
    {
      name: "Title",
      selector: (row: FormWithFieldsAndUser) => row.title,
      sortable: true,
    },
    {
      name: "Creator",
      selector: (row: FormWithFieldsAndUser) => row.user.name,
      sortable: true,
    },
    {
      name: "Created",
      selector: (row: FormWithFieldsAndUser) => stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Updated",
      selector: (row: FormWithFieldsAndUser) => stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Response Count",
      selector: (row: FormWithFieldsAndUser) => row._count?.submissions,
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
      sortable: true,
    },
    {
      name: "Responses",
      cell: (row: FormWithFieldsAndUser) => (
        <Link
          href={`/admin/form/${row.id}/responses`}
          className="p-2 bg-green-300 rounded-md text-white hover:bg-green-700 transition-all"
        >
          <FaComment />
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: FormWithFieldsAndUser) => (
        <div className="flex gap-2">
          <button
            onClick={() => duplicateForm(row.id)}
            title="Duplicate Form"
            className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-700 transition-all"
          >
            <FaRegCopy />
          </button>
          <button
            onClick={() => formDelete(row.id)}
            title="Delete Form"
            className="p-2 bg-red-500 rounded-md text-white hover:bg-red-700 transition-all"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  function copyToClipboard(id: string) {
    navigator.clipboard.writeText("https://moklet.org/form/" + id);
    alert("Link berhasil disalin!");
  }

  async function formDelete(id: string) {
    if (
      !confirm(
        "Apakah Anda yakin menghapus formulir beserta jawabannya?\n*Penghapusan tidak dapat dibatalkan",
      )
    )
      return;
    const toastId = toast.loading("Loading...");
    const action = await deleteForm(id);
    if (action.error) return toast.error(action.message, { id: toastId });
    toast.success(action.message, { id: toastId });
    router.refresh();
  }

  async function duplicateForm(id: string) {
    if (!confirm("Buat salinan untuk formulir ini?")) return;
    const toastId = toast.loading("Loading...");
    const action = await cloneForm(id);
    if (action.error) return toast.error(action.message, { id: toastId });
    toast.success(action.message, { id: toastId });
    router.refresh();
    // router.push(`/admin/form/${action.data?.id}`);
  }

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
