import type { Metadata } from "next";
import { frutigerCn, notoSansArabic } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kassatly Chtaura — Heritage & Innovation Since 1974",
  description: "Discover 50+ years of Lebanese excellence in beverages and food products. From award-winning wines to authentic flavors.",
  metadataBase: new URL("https://kassatlychataura.com"),
  openGraph: {
    title: "Kassatly Chtaura — Heritage & Innovation Since 1974",
    description: "Discover 50+ years of Lebanese excellence in beverages and food products.",
    url: "https://kassatlychataura.com",
    siteName: "Kassatly Chtaura",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kassatly Chtaura — Heritage & Innovation Since 1974",
    description: "Discover 50+ years of Lebanese excellence in beverages and food products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${frutigerCn.variable} ${notoSansArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
