import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/shared/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroQ",
  description: "Prueba tecnica - Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
