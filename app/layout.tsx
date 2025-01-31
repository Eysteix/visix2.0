import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className} antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        <main>{children}</main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
