import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import TopBar from "@/Components/Shared/TopBar/TopBar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} px-10 pt-10 fixed inset-0 `} suppressHydrationWarning={true}>
        {children}
        </body>
    </html>
  );
}
