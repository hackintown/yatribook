import type { Metadata } from "next";
import { Inter, Jost, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import BottomNav from "@/components/ui/Navbar/BottomNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yatri Book",
  description: "Yatri Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jost.variable} ${poppins.variable} antialiased`}
      >
        <div className="fixed top-0 w-full z-50 flex flex-col">
          <Navbar />
          <BottomNav />
        </div>
        <main className="pt-36 sm:pt-32">{children}</main>
      </body>
    </html>
  );
}
