import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import {Open_Sans} from  "next/font/google";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Marvelous Ajao Portfolio",
  description: "Portfolio site of Marvelous Ajao, a passionate software engineer.",
};

const sans = Open_Sans({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
