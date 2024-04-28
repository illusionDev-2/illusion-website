import type { ReactNode } from "react";
import ThemeProvider from "@/components/theme-provider";
import { Noto_Sans_JP } from "next/font/google";
import { Metadata } from "next";
import { generateDefaultMetadata } from "@/utils/metadata";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

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
