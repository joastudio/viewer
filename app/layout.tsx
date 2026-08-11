import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soonyworks.github.io/joa-viewer-site/"),
  title: {
    default: "좋아뷰어 — 내 파일, 내 책장, 내 방식",
    template: "%s | 좋아뷰어",
  },
  description:
    "서버 업로드 없이 내 만화·이미지·TXT를 읽는 한국어 중심 Android 뷰어.",
  icons: {
    icon: "https://soonyworks.github.io/joa-viewer-site/app-icon.png",
    shortcut: "https://soonyworks.github.io/joa-viewer-site/app-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "좋아뷰어",
    title: "좋아뷰어 — 내 파일, 내 책장, 내 방식",
    description: "내 만화·이미지·TXT를 조용하고 세밀하게 읽는 Android 뷰어.",
    images: [
      {
        url: "https://soonyworks.github.io/joa-viewer-site/og.png",
        width: 1200,
        height: 630,
        alt: "좋아뷰어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "좋아뷰어 — 내 파일, 내 책장, 내 방식",
    description: "내 만화·이미지·TXT를 조용하고 세밀하게 읽는 Android 뷰어.",
    images: ["https://soonyworks.github.io/joa-viewer-site/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
