import type {Metadata} from "next";
import localFont from "next/font/local";
import "../../globals.css";
import React from "react";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drupal Next App",
  description: "Drupal Next App - Thai ha",
};

export default function Layout({
 params,
 children}: {
  params: { locale: string };
  children: React.ReactElement
}) {
  return (
    <html lang={params.locale}>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
