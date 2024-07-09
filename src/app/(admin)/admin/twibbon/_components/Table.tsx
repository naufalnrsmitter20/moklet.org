"use client";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaLink, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

import { TwibbonWithUser } from "@/types/entityRelations";
import { stringifyCompleteDate } from "@/utils/atomics";
import { deleteTwibbonById } from "@/actions/twibbon";
import Modal from "./Modal";
import ClipboardJS from "clipboard";

export default function TwibbonTable({ data }: { data: TwibbonWithUser[] }) {
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState<TwibbonWithUser | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const columns: TableColumn<TwibbonWithUser>[] = [
    {
      name: "Link",
      cell: (row) => (
        <button
          title="Copy Link"
          data-clipboard-text={`${window.location.origin}/twbn/${row.slug}`}
          className="copy p-2 bg-slate-500 rounded-md text-white hover:bg-slate-700 transition-all"
        >
          <FaLink />
        </button>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Created by",
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.created_at.toString(),
      cell: (row) => (
        <span className=" flex flex-col justify-start">
          <span>
            {row.updated_at > row.created_at ? "Last updated" : "Created at"}
          </span>
          {stringifyCompleteDate(row.updated_at)}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => editTwibbon(row)}
            title="Edit Twibbon"
            className="bg-blue-100 text-blue-800 text-xs font-medium me-2 p-2.5 rounded hover:text-white  hover:bg-blue-700 transition-all"
          >
            <FaPencilAlt />
          </button>
          <button
            onClick={() => deleteAction(row.id)}
            title="Delete Twibbon"
            className="bg-red-100 text-red-800 text-xs font-medium me-2 p-2.5 rounded hover:text-white  hover:bg-red-700 transition-all"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  function editTwibbon(data: TwibbonWithUser) {
    setModalData(data);
    setIsOpenModal(true);
  }

  async function deleteAction(id: string) {
    if (!confirm("Anda yakin ingin menghapus item ini?")) return;
    const toastId = toast.loading("Loading...");
    const result = await deleteTwibbonById(id);
    if (!result.error) toast.success(result.message, { id: toastId });
    else toast.error(result.message, { id: toastId });
  }

  useEffect(() => {
    setLoader(false);

    const clipboard = new ClipboardJS(".copy");

    clipboard.on("success", function (e) {
      e.clearSelection();
      alert("Link berhasil disalin!");
    });

    // eslint-disable-next-line no-unused-vars
    clipboard.on("error", function (_e) {
      console.log("Error copying text");
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  if (loader) return <div>Loading</div>;

  return (
    <div className="p-2 rounded-md bg-white">
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} data={modalData} />
      )}
      <DataTable columns={columns} data={data} pagination highlightOnHover />
    </div>
  );
}
