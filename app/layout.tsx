import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Navbar from "@/app/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
