import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function SummaryTable({ data }: { data: string[] }) {
  const [loader, setLoader] = useState(true);

  const columns = [
    {
      name: "Answer",
      selector: (row: string) => row,
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
      />
    </div>
  );
}
