import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import PasswordPrompt from "./_components/PasswordPrompt";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { headers } from "next/headers";

export default async function RedirectToTarget({
  params,
}: {
  params: { slug: string };
}) {
  const findShortLink = await prisma.link_Shortener.findUnique({
    where: { slug: params.slug },
  });
  const headersList = headers();
  const host = headersList.get("host");
  const proto = headersList.get("x-forwarded-proto");

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

  return redirect(
    (findShortLink.type == "System" ? proto + "://" + host : "") +
      findShortLink.target_url,
  );
}
