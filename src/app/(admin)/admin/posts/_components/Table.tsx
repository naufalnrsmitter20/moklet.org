"use client";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import DataTable, { TableColumn } from "react-data-table-component";
import { stringifyCompleteDate } from "@/utils/atomics";
import { useEffect, useState } from "react";
import { useRouter } from "next-nprogress-bar";
import { toast } from "sonner";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { MdPublish, MdUnpublished } from "react-icons/md";
import { postDelete, updatePostStatus } from "../action";

export default function PostTable({ data }: { data: PostWithTagsAndUser[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  var now = new Date().getTime();
  const columns: TableColumn<PostWithTagsAndUser>[] = [
    {
      name: "Title",
      selector: (row: PostWithTagsAndUser) => row.title,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row: PostWithTagsAndUser) => row.user.name,
      sortable: true,
    },
    {
      name: "Tag",
      cell: (row: PostWithTagsAndUser) => (
        <span>{row.tags.map((tag) => tag.tagName).join(", ")}</span>
      ),

      sortable: false,
    },
    {
      name: "Date",
      cell: (row: PostWithTagsAndUser) => (
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
      name: "Status",
      cell: (row: PostWithTagsAndUser) =>
        row.published ? (
          <span className="p-2 bg-green-600 rounded-md text-white">
            Published
          </span>
        ) : (
          <span className="p-2 bg-red-600 rounded-md text-white">Draft</span>
        ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: PostWithTagsAndUser) => (
        <div className="flex gap-2">
          <button
            onClick={() => updateStatus(row.published, row.id)}
            title={row.published ? "Unpublish post" : "Publish post"}
            className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-700 transition-all"
          >
            {row.published ? <MdUnpublished /> : <MdPublish />}
          </button>
          <button
            onClick={() => deletePost(row.id)}
            title="Delete Post"
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

  async function deletePost(id: string) {
    if (
      !confirm(
        "Apakah Anda yakin menghapus Post?\n*Penghapusan tidak dapat dibatalkan",
      )
    )
      return;
    const toastId = toast.loading("Loading...");
    const action = await postDelete(id);
    if (action.error) return toast.error(action.message, { id: toastId });
    toast.success(action.message, { id: toastId });
    router.refresh();
  }

  async function updateStatus(state: boolean, id: string) {
    if (!confirm("Apakah anda ingin mengupdate post ini?")) return;
    const toastId = toast.loading("Loading...");
    const action = await updatePostStatus(state, id);
    if (action.error) return toast.error(action.message, { id: toastId });
    setTimeout(() => {
      toast.success(action.message, { id: toastId });
    }, 3000);
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
        onRowClicked={(row: PostWithTagsAndUser) =>
          router.push(`/admin/posts/${row.id}`)
        }
      />
    </div>
  );
}
