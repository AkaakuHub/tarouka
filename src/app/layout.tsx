import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "太郎化",
  description: "濁点を付与するだけ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
