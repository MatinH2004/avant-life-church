import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirLTStd-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTStd-Heavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myfont", // optional if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: "Avant Life Church",
  description: "Avant Life Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
