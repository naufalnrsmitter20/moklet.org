"use client";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import DataTable, { TableColumn } from "react-data-table-component";
import { stringifyCompleteDate } from "@/utils/atomics";
import { useEffect, useState } from "react";
import { useRouter } from "next-nprogress-bar";
import { toast } from "sonner";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdPublish, MdUnpublished } from "react-icons/md";
import { postDelete, updatePostStatus } from "@/app/actions/post";

export default function PostTable({ data }: { data: PostWithTagsAndUser[] }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

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
      selector: (row: PostWithTagsAndUser) => row.created_at.toString(),
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
      selector: (row: PostWithTagsAndUser) => row.published,
      cell: (row: PostWithTagsAndUser) =>
        row.published ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            Published
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-3">Draft</span>
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
            className="bg-blue-100 text-blue-800 text-xs font-medium me-2 p-2.5 rounded hover:text-white  hover:bg-blue-700 transition-all"
          >
            {row.published ? <MdUnpublished /> : <MdPublish />}
          </button>
          <button
            onClick={() => deletePost(row.id)}
            title="Delete Post"
            className="bg-red-100 text-red-800 text-xs font-medium me-2 p-2.5  rounded hover:text-white  hover:bg-red-700 transition-all"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      ),
    },
  ];

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
