import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/utils/fonts";



export const metadata: Metadata = {
  title: "Dua & Ruqyah",
  description: "Dua & Ruqyah by IRD Foundation",
  icons:{
    icon:'https://duaruqyah.com/assets/dua-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-secondary-bg  ">
      <body className={`${inter.className}  xl:px-10 xl:pt-10 fixed inset-0 `} suppressHydrationWarning={true}>
        {children}
        </body>
    </html>
  );
}
