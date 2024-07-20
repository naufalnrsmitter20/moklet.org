import Filter from "./components/Filter";
import { findAllEvents } from "@/utils/database/event.query";
import AspirationList from "./components/AspirationList";

export default async function AspirasiAdmin() {
  const events = await findAllEvents();

  return (
    <>
      <Filter event={events} />
      <div className="flex flex-col gap-4">
        <AspirationList />
      </div>
    </>
  );
}
