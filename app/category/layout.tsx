import type { Metadata } from "next";
import "../globals.css";
import { Nunito_Sans } from "next/font/google";
import { CurrencyProvider } from "@/components/layout/navbar/currencyContext";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Category",
  description: "Monito Pets, category page",
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
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
