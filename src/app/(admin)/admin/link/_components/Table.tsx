"use client";
import { Link_Shortener, Link_Shortener_Count, User } from "@prisma/client";
import DataTable, { TableColumn } from "react-data-table-component";
import Link from "next/link";
import { stringifyDate } from "@/utils/atomics";

export default function LinkTable({
  data,
  view,
  user,
}: {
  data: Link_Shortener[];
  view: Link_Shortener_Count[];
  user: User[];
}) {
  const columns: TableColumn<Link_Shortener>[] = [
    {
      name: "Link",
      cell: (row: Link_Shortener) => {
        return (
          <Link
            href={"https://go.moklet.org/" + row.slug}
            target="_blank"
            className="text-primary-400 hover:text-primary-200 transition-all duration-500"
          >
            {"go.moklet.org/" + row.slug}
          </Link>
        );
      },
    },
    {
      name: "Created by",
      selector: (row: Link_Shortener) =>
        user.find((x) => x.id === row.user_id)!.name,
    },
    {
      name: "Target",
      selector: (row: Link_Shortener) => row.target_url,
    },
    {
      name: "Created at",
      selector: (row: Link_Shortener) => stringifyDate(row.created_at),
      sortable: true,
    },
    {
      name: "Views",
      selector: (row: Link_Shortener) =>
        view.find((x) => x.id === row.slug)!.click_count,
      sortable: true,
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
