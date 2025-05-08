import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PURE PRIDE PHARMA PVT LTD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
