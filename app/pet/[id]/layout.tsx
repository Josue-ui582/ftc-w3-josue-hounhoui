import type { Metadata } from "next";
import { CurrencyProvider } from "@/components/shared/navbar/currencyContext";


export const metadata: Metadata = {
  title: "Pet Detail",
  description: "Monito Pets, pet detail page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CurrencyProvider>
      {children}
    </CurrencyProvider>
  );
}