import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Company — Modern Web Experiences",
  description: "We design and build fast, reliable, and delightful digital products.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Company — Modern Web Experiences",
    description: "We design and build fast, reliable, and delightful digital products.",
    url: "https://example.com",
    siteName: "Your Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Company — Modern Web Experiences",
    description: "We design and build fast, reliable, and delightful digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
