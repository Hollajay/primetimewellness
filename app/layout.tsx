import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { Bebas_Neue, Barlow } from "next/font/google";

const bebas = Bebas_Neue({

  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});



export const metadata: Metadata = {
  title: "PrimeTime Wellness",
  description: "Ibadan premium wellness center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${bebas.variable} ${barlow.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Nav/>
        {children}
        </body>
    </html>
  );
}