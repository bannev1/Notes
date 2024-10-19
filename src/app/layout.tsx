import type { Metadata } from "next";
import "./globals.css";
import "./markdown.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "IB Notes",
  description: "Notes for IBDP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
