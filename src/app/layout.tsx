import type { ReactNode } from "react";
import ThemeProvider from "@/components/theme-provider";
import { Metadata } from "next";
import { generateDefaultMetadata } from "@/utils/metadata";
import { notoSansJp } from "@/utils/font";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000d1a"
};

type LayoutProps = {
  children: ReactNode
};

export const generateMetadata = (_: unknown, parent: any): Metadata => generateDefaultMetadata(parent);

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="ja">
      <head />
      <body className={notoSansJp.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
