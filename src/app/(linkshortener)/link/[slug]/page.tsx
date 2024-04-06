import { H3 } from "@/app/_components/global/Text";
import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { TextField } from "@/app/_components/global/Input";
import { PrimaryButton } from "@/app/_components/global/Button";
import PasswordPrompt from "./_components/PasswordPrompt";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default async function RedirectToTarget({
  params,
}: {
  params: { slug: string };
}) {
  const findShortLink = await prisma.link_Shortener.findUnique({
    where: { slug: params.slug },
  });

  if (!findShortLink) return notFound();
  if (findShortLink.password) {
    return (
      <SectionWrapper id="pass">
        <PasswordPrompt slug={params.slug} />
      </SectionWrapper>
    );
  }

  // Increments the click count of the short link
  await prisma.link_Shortener_Count.upsert({
    where: { id: params.slug },
    update: { click_count: { increment: 1 } },
    create: { click_count: 1, id: params.slug },
  });

  return redirect(findShortLink.target_url);
}
