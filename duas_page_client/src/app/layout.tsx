
import "./globals.css";
import { inter } from "@/utils/fonts";
import { AppContextProvider } from "@/Contexts/AppContext";
import type { Metadata } from "next";

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
      <body className={`${inter.className}  xl:px-8 xl:pt-8 scrollbar-thin max-w-[1920px] mx-auto antialiased overflow-y-hidden`} suppressHydrationWarning={true}>
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
