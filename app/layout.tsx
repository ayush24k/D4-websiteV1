import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josfin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D4 Community",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josfin.className} antialiased`}>{children}</body>
    </html>
  );
}
