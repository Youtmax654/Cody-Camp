"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Inter } from "next/font/google";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerAppear, setHeaderAppear] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setHeaderAppear(pathname !== "/" && !pathname.includes("/confirmEmail"));
    if (pathname === "/" && document.cookie.includes("uid")) {
      redirect("/home");
    } else if (
      pathname !== "/" &&
      !pathname.includes("/confirmEmail") &&
      !document.cookie.includes("uid")
    ) {
      redirect("/");
    } else {
      setIsLoading(false);
    }
  }, [pathname]);

  return (
    <html lang="fr">
      <body
        className={`${inter.className} ${headerAppear ? "flex flex-row" : ""}`}
      >
        {headerAppear && <Header />}
        {isLoading ? <Loading /> : children}
        <ToastContainer />
      </body>
    </html>
  );
}
