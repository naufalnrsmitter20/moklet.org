import { findAllEvents } from "@/utils/database/event.query";
import AspirationWrapper from "./_components/Wrapper";

export default async function Aspirasi() {
  const events = await findAllEvents();

  return (
    <>
      <AspirationWrapper events={events} />
    </>
  );
}
