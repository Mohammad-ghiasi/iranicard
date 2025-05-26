import type { Metadata } from "next";

import "./globals.css";
import { IranYekan } from "../fonts/font";
import ReactqueryProviders from "@/providers/ReactqueryProviders";

export const metadata: Metadata = {
  title: "ایرانیکارت",
  description: "iranicard international crypto exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${IranYekan} antialiased`}
      >
        <div className={`${IranYekan.className}`}>
          <ReactqueryProviders>
            {children}
          </ReactqueryProviders>
        </div>
      </body>
    </html>
  );
}
