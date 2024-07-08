import { internalServerError } from "@/utils/apiResponse";
import { findTwibbon } from "@/utils/database/twibbon.query";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    const twibbon = await findTwibbon({ slug });

    if (!twibbon) return notFound();

    return NextResponse.redirect(
      `https://twibbon.moklet.org/go?title=${twibbon.title}&slug=${slug}&frameUrl=${twibbon.frame_url}${twibbon?.caption ? "&caption=" + encodeURIComponent(twibbon.caption as string) : ""}`,
      { status: 302 },
    );
  } catch (error) {
    return internalServerError([]);
  }
}
