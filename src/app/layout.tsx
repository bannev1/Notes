import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IB & GCSE Notes",
  description: "Notes for iGCSE and IBDP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
