import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { NextUIProvider } from "@nextui-org/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaxMovie - Find your movies",
  description: "find your favorite movies",
  icons: {
    icon: "movixlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />

        <StoreProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
