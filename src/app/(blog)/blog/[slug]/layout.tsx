import "../../../globals.css";
import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Behavioral Interview - AI powered Story Toolbox",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <body className={`${inter.className} w-screen h-[100dvh] md:h-screen relative`}>{children}</body>
  );
}
