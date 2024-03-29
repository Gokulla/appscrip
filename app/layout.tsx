import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appscrip-task",
  description: "shoping cart app developed by nextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <Title />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
