import { Organisasi_Type } from "@prisma/client";

import { findOrganisasi } from "@/utils/database/organisasi.query";
import {
  findAllPeriodOrganization,
  findPeriod,
} from "@/utils/database/periodYear.query";
import { notFound } from "next/navigation";
import { H2, P } from "@/app/_components/global/Text";
import Form from "../../_components/Form";
import { nextGetServerSession } from "@/lib/next-auth";
import Select from "../../_components/Select";

export default async function Edit({
  params,
}: {
  params: { organisasi: Organisasi_Type; period: string };
}) {
  const { organisasi, period } = params;

  const session = await nextGetServerSession();
  const { user } = session!;

  if (!Object.values(Organisasi_Type).includes(organisasi)) return notFound();

  const periode = await findPeriod({ period });
  if (!periode) return notFound();

  const allPeriod = await findAllPeriodOrganization();
  allPeriod.sort((a, b) => {
    return parseInt(b.period.split("-")[0]) - parseInt(a.period.split("-")[0]);
  });
  const notFoundPeriod = allPeriod.filter(
    (item) =>
      item.organisasis.findIndex((org) => org.organisasi == organisasi) == -1,
  );

  let organization = await findOrganisasi({
    organisasi_period_id: {
      period_id: periode.id,
      organisasi: params.organisasi as Organisasi_Type,
    },
  });

  if (!organization) {
    const findNewest = allPeriod[0].organisasis.find(
      (item) => item.organisasi == organisasi,
    );
    if (findNewest) {
      organization = await findOrganisasi({ id: findNewest.id });
      organization!.id = "";
    } else
      organization = {
        companion: "",
        contact: "",
        description: "",
        id: "",
        image:
          "https://res.cloudinary.com/mokletorg/image/upload/v1720188074/assets/image_placeholder.png",
        image_description: "",
        is_suborgan: true,
        logo: "",
        mission: "",
        organisasi,
        organisasi_name: "",
        period_id: periode.id,
        structure: "",
        created_at: new Date(),
        updated_at: new Date(),
        vision: "",
      };
  }

  return (
    <>
      <div>
        <H2 className="font-semibold">Organization Information</H2>
        <P>Introduce your organization&apos;s profile to the world!</P>
      </div>
      {notFoundPeriod.length != 0 && (
        <div
          className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold block">Data tidak ditemukan!</strong>
          <span className="block sm:inline">
            Anda belum memperbarui informasi {organisasi} pada Masa Bakti{" "}
            {notFoundPeriod
              .map((item) => item.period.replace(/-/, "/"))
              .join(", ")}
            .
          </span>
        </div>
      )}
      <Select
        allPeriod={allPeriod}
        organisasi={organisasi}
        period={period}
        user={user}
      />
      <Form
        organisasi={organization!}
        period={period}
        organisasiType={organisasi}
      />
    </>
  );
}
