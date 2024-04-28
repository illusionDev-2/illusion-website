import { ContentsDir } from "@/features/markdown/utils/content";
import TopPage from "@/components/top-page";

const DISCORD_CONTENT_DIR = new ContentsDir("discord");
const BLOG_CONTENT_DIR = new ContentsDir("blog");

export default async function Page(): Promise<JSX.Element> {
  const [roles, guidelines, blogArticles] = await Promise.all([
    DISCORD_CONTENT_DIR.getArticle("roles"),
    DISCORD_CONTENT_DIR.getArticle("guidelines"),
    BLOG_CONTENT_DIR.getAllArticles()
  ]);

  return (
    <TopPage
      roles={roles}
      guidelines={guidelines}
      blogArticles={blogArticles}
    />
  );
}
