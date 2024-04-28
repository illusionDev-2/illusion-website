import { isExternalLink } from "@/utils/url";

import type { AnchorHTMLAttributes } from "react";


export default function MarkdownLink({ href = "/", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const externalLink = isExternalLink(href);

  return (
    <a
      {...props}
      href={href}
      className="markdown-link"
      target={externalLink ? "_blank" : undefined}
      rel={externalLink ? "noopener noreferrer" : undefined}
      style={{
        color: "var(--mui-palette-primary-main)"
      }}
    >
      {children}
      {externalLink && <span className="icon-open-in-new" />}
    </a>
  );
}
