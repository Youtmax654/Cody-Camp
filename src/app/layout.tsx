"use client";

import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          pathname !== "/" ? "flex flex-row" : ""
        }`}
      >
        {pathname !== "/" && <Header />}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
