import { MetadataRoute } from "next";

import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findPosts } from "@/utils/database/post.query";

// TODO: Add all public routes to sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await findPosts()) as PostWithTagsAndUser[];

  const conventionalRoutes = [
    "/berita",
    "/organisasi",
    "/tentang",
    "/kontributor",
  ].map((route) => ({
    url: `${process.env.URL ?? "https://moklet.org"}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as
      | "yearly"
      | "monthly"
      | "never"
      | "always"
      | "hourly"
      | "daily"
      | "weekly",
  }));

  const postsRoutes = posts.map((post) => ({
    url: `${process.env.URL ?? "https://www.moklet.org"}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at).toISOString(),
    changeFrequency: "yearly" as
      | "yearly"
      | "monthly"
      | "never"
      | "always"
      | "hourly"
      | "daily"
      | "weekly",
  }));

  return [
    {
      url: `${process.env.URL ?? "https://www.moklet.org"}/`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: "never",
    },
    ...conventionalRoutes,
    ...postsRoutes,
  ];
}
