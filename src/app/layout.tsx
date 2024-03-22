import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from '../components/aos'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'JYP Entertaiment | %s',
    default: 'JYP Entertaiment'
  },
  description: "JYP Entertaiment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
