import { findAllAspirations } from "@/utils/database/aspiration.query";
import Filter from "./components/Filter";
import { Organisasi_Type, UnitSekolah } from "@prisma/client";
import { findAllEvents } from "@/utils/database/event.query";
import AspirationFigure from "./components/ApirationFigure";
import { H3 } from "@/app/_components/global/Text";
import { AspirationWithUser } from "@/types/entityRelations";

export default async function AspirasiAdmin({
  searchParams,
}: {
  searchParams: {
    to: string;
    from: string;
    organisasi: string;
    unit: string;
    event: string;
  };
}) {
  const to = searchParams.to || undefined;
  const from = searchParams.from || undefined;
  const organisasi = searchParams.organisasi || undefined;
  const unit = searchParams.unit || undefined;
  const event = searchParams.event || undefined;
  let aspirasis: AspirationWithUser[] = [];

  if (organisasi && organisasi != "" && to && to != "" && from && from != "") {
    const organ = organisasi.toUpperCase() as Organisasi_Type;
    aspirasis = await findAllAspirations({
      organisasi: organ,
      created_at: { gte: new Date(from), lte: new Date(to + "T23:59:59Z") },
    });
  }
  if (unit && unit != "" && from && from != "" && to && to != "") {
    const unitQ = unit.toUpperCase() as UnitSekolah;
    aspirasis = await findAllAspirations({
      unit_sekolah: unitQ,
      created_at: { gte: new Date(from), lte: new Date(to + "T23:59:59Z") },
    });
  }

  if (event && event != "")
    aspirasis = await findAllAspirations({
      event: { id: event },
    });

  const events = await findAllEvents();

  return (
    <>
      <Filter event={events} />
      <div className="flex flex-col gap-4">
        <H3>Menunjukkan {aspirasis.length} aspirasi</H3>
        {aspirasis.map((a) => (
          <AspirationFigure data={a} key={a.id} />
        ))}
      </div>
    </>
  );
}
