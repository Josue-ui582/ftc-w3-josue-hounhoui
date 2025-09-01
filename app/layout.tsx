import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
