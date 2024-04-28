import ArticlePage from "@/features/markdown/components/article-page";
import { ContentsDir } from "@/features/markdown/utils/content";
import { getHeadings } from "@/features/markdown/utils/html";
import type { Slug } from "@/features/markdown/utils/types";
import { execPipe, map, toArray } from "iter-tools";
import { notFound } from "next/navigation";
import { generateDefaultMetadata, generateNotFoundMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import { siteName } from "@/consts/site";
import BreadcrumbsItem from "@/features/markdown/components/breadcrumbs-item";

type PageParams = {
  slug: Slug
};

const BLOG_CONTENT_DIR = new ContentsDir("blog");

export const generateMetadata = async ({ params: { slug } }: PageProps, parent: any): Promise<Metadata> => {
  const exists = await BLOG_CONTENT_DIR.existsSlug(slug);

  if (!exists) {
    return generateNotFoundMetadata();
  }

  const { title, description } = await BLOG_CONTENT_DIR.getArticle(slug);
  const defaultMetadata = generateDefaultMetadata(parent);

  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description
    }
  };
};

export const generateStaticParams = async (): Promise<PageParams[]> => {
  const slugs = execPipe(
    await BLOG_CONTENT_DIR.getAllSlugs(),
    map(slug => ({ slug })),
    toArray
  );

  // NOTE: https://github.com/vercel/next.js/issues/61213
  if (slugs.length === 0) {
    return [
      {
        slug: "__EMPTYSLUGS"
      }
    ];
  }

  return slugs;
}

type PageProps = {
  params: PageParams
};

export default async function Page({ params: { slug } }: PageProps): Promise<JSX.Element> {
  if (slug === "__EMPTYSLUGS") {
    return <></>;
  }

  const article = await BLOG_CONTENT_DIR.getArticle(slug);
  const headings = getHeadings(article.html);

  return (
    <ArticlePage
      {...article}
      headings={headings}
      breadcrumbs={[
        {
          href: "/blog",
          label: "ブログ"
        }
      ]}
    />
  );
}
