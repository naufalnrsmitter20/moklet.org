"use client";
import { UserWithLastlog } from "@/types/entityRelations";
import DataTable, { TableColumn } from "react-data-table-component";
import { stringifyCompleteDate } from "@/utils/atomics";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { deleteUserById } from "@/app/actions/user";
import Modal from "./Modal";

export default function UserTable({ data }: { data: UserWithLastlog[] }) {
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState<UserWithLastlog | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const columns: TableColumn<UserWithLastlog>[] = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: false,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: false,
    },
    {
      name: "Role",
      selector: (row) => row.role,

      sortable: true,
    },
    {
      name: "Last Active",
      selector: (row) =>
        row.userAuth?.last_login
          ? stringifyCompleteDate(row.userAuth?.last_login)
          : "Never",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => editUser(row)}
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

  function editUser(data: UserWithLastlog) {
    setModalData(data);
    setIsOpenModal(true);
  }

  async function deleteAction(id: string) {
    if (!confirm("Anda yakin ingin menghapus item ini?")) return;
    const toastId = toast.loading("Loading...");
    const result = await deleteUserById(id);
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
