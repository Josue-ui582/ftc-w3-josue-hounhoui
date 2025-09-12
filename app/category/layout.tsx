import type { Metadata } from "next";
import "../globals.css";
import { CurrencyProvider } from "@/components/shared/navbar/currencyContext";


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
    <CurrencyProvider>
      {children}
    </CurrencyProvider>
  );
}
