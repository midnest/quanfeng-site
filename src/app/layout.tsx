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
  // Performance: Preconnect to critical domains
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
  // Performance: Prevent zoom on input focus for iOS
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Performance: Preconnect and DNS prefetch */}
        <link rel="preconnect" href="https://quanfeng.co" />
        <link rel="dns-prefetch" href="https://quanfeng.co" />
        
        {/* Performance: Preload critical resources */}
        <link rel="preload" href={withBasePath("/images/quanfeng/logo.png")} as="image" type="image/png" />
        
        {/* Performance: Prefetch common pages */}
        <link rel="prefetch" href="/" />
        <link rel="prefetch" href="/cn/" />
        
        {/* Performance: Resource hints for product images */}
        <link rel="prefetch" href={withBasePath("/images/quanfeng/products/qa9225.jpg")} as="image" />
        <link rel="prefetch" href={withBasePath("/images/quanfeng/products/qa12038.jpg")} as="image" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
