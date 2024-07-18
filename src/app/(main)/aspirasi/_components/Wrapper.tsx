"use client";

import { aspirationType } from "@/actions/aspirasi";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import AspirationForm from "./AspirationForm";
import Selector from "./Selector";
import { Event } from "@prisma/client";

export default function AspirationWrapper({ events }: { events: Event[] }) {
  const { status, data: session } = useSession();
  const [type, setType] = useState<aspirationType | undefined>(
    "PILIH" || "ORGANISASI" || "SEKOLAH" || "EVENT",
  );

  const [recipient, setRecipient] = useState<string | undefined>();
  const [eventName, setEventName] = useState<string | undefined>();

  if (status === "unauthenticated") {
    return redirect("/api/auth/signin?callbackUrl=%2Faspirasi");
  }

  return (
    <>
      <Selector
        recipient={recipient?.toString()}
        setRecipient={setRecipient}
        setEventName={setEventName}
        setType={setType}
        type={type}
        event={events}
      />
      <AspirationForm
        session={session!}
        recipient={recipient!}
        type={type!}
        eventName={eventName!}
      />
    </>
  );
}
