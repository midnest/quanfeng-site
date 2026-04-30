import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/quanfeng/styles.css";
import { withBasePath } from "@/quanfeng/lib/base-path";

export const metadata: Metadata = {
  title:
    "Quanzhou Quanfeng Motor Co., Ltd_Quanzhou Quanfeng Motor Co., Ltd., AC fan, DC fan, motor series, mold manufacturing, die casting manufacturing, injection molding manufacturing, protective mesh cover",
  description:
    "Quanzhou Quanfeng Motor Co., Ltd., AC fan, DC fan, motor series, mold manufacturing, die casting manufacturing, injection molding manufacturing, protective mesh cover",
  icons: {
    icon: withBasePath("/images/quanfeng/logo.png"),
  },
  // Preconnect to common domains for faster resource loading
  other: {
    preconnect: [
      "https://quanfeng.co",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://quanfeng.co" />
        <link rel="dns-prefetch" href="https://quanfeng.co" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
