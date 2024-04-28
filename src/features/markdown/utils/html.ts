import type { Markdown, Html, Heading } from "@/features/markdown/utils/types";
import { HeadingLevel } from "@/features/markdown/utils/types";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeShiftHeading from "rehype-shift-heading";
import rehypeBudoux from "rehype-budoux";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeReact, { type Options as RehypeReactOptions } from "rehype-react";
import { load } from "cheerio";
import rehypeSlug from "rehype-slug";
import { execPipe, map, toArray } from "iter-tools";
import MarkdownLink from "@/features/markdown/components/markdown-link";

export const toHtml = async (markdown: Markdown): Promise<Html> => {
  const { renderToString } = await import("react-dom/server");

  return await remark()
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeShiftHeading, {
      shift: 1
    })
    .use(rehypeSlug)
    .use(rehypeReact, {
      Fragment,
      jsx,
      jsxs,
      components: {
        a: MarkdownLink
      }
    } as RehypeReactOptions)
    .use(rehypeBudoux, {
      className: "budoux-breaked"
    })
    .process(markdown)
    .then(({ result }) => renderToString(result));
};

export const getHeadingLevel = (tagName: string): HeadingLevel => {
  switch (tagName) {
    case "h1": {
      return HeadingLevel.H1;
    }

    case "h2": {
      return HeadingLevel.H2;
    }

    case "h3": {
      return HeadingLevel.H3;
    }

    case "h4": {
      return HeadingLevel.H4;
    }

    case "h5": {
      return HeadingLevel.H5;
    }

    // h6 and other elements as h6
    default: {
      return HeadingLevel.H6;
    }
  }
};

export const getHeadings = (html: Html): Heading[] => {
  const $ = load(html);

  return execPipe(
    $(":header"),
    map(e => ({
      level: getHeadingLevel(e.tagName),
      id: $(e).attr("id") as string,
      textContent: $(e).text()
    })),
    toArray
  );
};
