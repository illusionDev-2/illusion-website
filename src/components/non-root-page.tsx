"use client";

import Stack from "@mui/material/Stack";
import Header from "@/features/markdown/components/header";
import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import Divider from "@mui/material/Divider";
import Breadcrumbs, { BreadcrumbsItem } from "@/features/markdown/components/breadcrumbs";

export type NonRootPageProps = PropsWithChildren<{
  breadcrumbs?: BreadcrumbsItem[]
}>;

export default function NonRootPage({ breadcrumbs = [], children }: NonRootPageProps): JSX.Element {
  return (
    <Stack alignItems="flex-start">
      <Header />
      <Container
        sx={{
          paddingY: "1rem"
        }}
      >
        <Stack spacing={2}>
          {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
          <Divider />
          {children}
        </Stack>
      </Container>
    </Stack>
  );
}
