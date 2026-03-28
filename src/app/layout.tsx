import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "埃及 9 天深度之旅 | 2026/04/02-10",
  description:
    "開羅 ➜ 黑白沙漠 ➜ 阿斯旺 ➜ 盧克索郵輪 — 埃及豆豆旅行",
  openGraph: {
    title: "埃及 9 天深度之旅 | 2026/04/02-10",
    description:
      "開羅 ➜ 黑白沙漠 ➜ 阿斯旺 ➜ 盧克索郵輪 — 埃及豆豆旅行",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-papyrus font-body text-nile antialiased">
        {children}
      </body>
    </html>
  );
}
