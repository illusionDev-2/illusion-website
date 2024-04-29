import { ReactElement } from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

export type BreadcrumbsItem = {
  href?: string,
  label: string,
  emphasis?: boolean
};

export type BreadcrumbsProps = {
  items: BreadcrumbsItem[]
};

export default function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
  return (
    <MuiBreadcrumbs>
      {items.map(({ href, label, emphasis = false }) => (
        <span key={[href, label, emphasis].join()}>
          {href && (
            <MuiLink
              href={href}
              component={NextLink}
              underline="hover"
              color="inherit"
            >
              {label}
            </MuiLink>
          )}
          {!href && <Typography color={emphasis ? "text.primary" : "text.seconadry"}>{label}</Typography>}
        </span>
      ))}
    </MuiBreadcrumbs>
  );
}
