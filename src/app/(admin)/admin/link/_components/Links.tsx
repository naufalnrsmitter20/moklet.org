import { LinkWithCountAndUser } from "@/types/entityRelations";
import LinkFigure from "./LinkFigure";
import { useState } from "react";

export default function Links({ links }: { links: LinkWithCountAndUser[] }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <LinkFigure link={link} key={link.slug}></LinkFigure>
      ))}
    </div>
  );
}
