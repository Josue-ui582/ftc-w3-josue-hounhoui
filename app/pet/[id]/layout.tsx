import type { Metadata } from "next";
import { CurrencyProvider } from "@/components/shared/navbar/currencyContext";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

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