import { SectionWrapper } from "@/app/_components/global/Wrapper";
import LinkForm from "./_components/LinkForm";
import prisma from "@/lib/prisma";
import { Link_Shortener } from "@prisma/client";
import Link from "next/link";
import LinkTable from "./_components/Table";
import LinkFigure from "./_components/LinkFigure";
import { findAllLinks } from "@/utils/database/linkShortener.query.ts";
import { nextGetServerSession } from "@/lib/next-auth";
import Links from "./_components/Links";
import Modal from "./_components/Modal";

export default async function Shortener() {
  const session = await nextGetServerSession();
  const { user } = session!;
  const links = await findAllLinks({
    user_id: user?.role == "SuperAdmin" ? undefined : user?.id,
  });

  return (
    <SectionWrapper id="Form">
      <LinkForm />
      <Links links={links} />
    </SectionWrapper>
  );
}
