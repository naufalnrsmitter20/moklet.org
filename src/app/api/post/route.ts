import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      select: {
        title: true,
        content: true,
        created_at: true,
        updated_at: true,
        tags: true,
        description: true,
        published: true,
        slug: true,
        view_count: true,
        reaction: true,
        thumbnail: true,
        published_at: true,
        user: {
          select: {
            name: true,
            email: true,
            role: true,
            user_pic: true,
          },
        },
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
