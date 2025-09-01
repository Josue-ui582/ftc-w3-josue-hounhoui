import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Monito Pets",
  description: "Monito pets is a e-commerce web site for dog selling and to make you fing dog's nutritions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
