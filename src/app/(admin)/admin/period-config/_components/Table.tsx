"use client";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

import { deleteUserById } from "@/actions/user";
import { Organisasi_Type, Period_Year } from "@prisma/client";

import Modal from "./Modal";
import cn from "@/lib/clsx";
import { PeriodWithOrganisasi } from "@/types/entityRelations";
import { deletePeriodById } from "@/actions/periodConfig";

export default function PeriodTable({
  data,
}: {
  data: PeriodWithOrganisasi[];
}) {
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState<PeriodWithOrganisasi | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const organisasiList = Object.values(Organisasi_Type);

  const columns: TableColumn<PeriodWithOrganisasi>[] = [
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row) => row.is_active,
      cell: (row) => (
        <span
          className={cn(
            "text-xs font-medium me-2 p-2.5 rounded",
            row.is_active
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800 ",
          )}
        >
          {row.is_active ? "Yes" : "No"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Not yet complete",
      selector: (row) =>
        organisasiList
          .filter(
            (item) =>
              row.organisasis.findIndex((org) => org.organisasi == item) == -1,
          )
          .join(", ") || "Complete All",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => editPeriod(row)}
            title="Edit User"
            className="bg-blue-100 text-blue-800 text-xs font-medium me-2 p-2.5 rounded hover:text-white  hover:bg-blue-700 transition-all"
          >
            <FaPencilAlt />
          </button>
          <button
            onClick={() => deleteAction(row.id)}
            title="Delete User"
            className="bg-red-100 text-red-800 text-xs font-medium me-2 p-2.5 rounded hover:text-white  hover:bg-red-700 transition-all"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  function editPeriod(data: PeriodWithOrganisasi) {
    setModalData(data);
    setIsOpenModal(true);
  }

  async function deleteAction(id: string) {
    if (!confirm("Anda yakin ingin menghapus item ini?")) return;
    const toastId = toast.loading("Loading...");
    const result = await deletePeriodById(id);
    if (!result.error) toast.success(result.message, { id: toastId });
    else toast.error(result.message, { id: toastId });
  }

  useEffect(() => {
    setLoader(false);
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
