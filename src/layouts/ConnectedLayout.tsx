"use client";

import Header from "@/components/Header/Header";
import Loading from "@/components/Loading";
import useStore from "@/hooks/useStore";
import { useUser } from "@/hooks/useUser";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ConnectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, setUser, theme, layoutLoading, setLayoutLoading } = useStore();
  const { getUser } = useUser();

  useEffect(() => {
    console.log("Connected Layout rendered");
  }, []);

  useEffect(() => {
    if (user === null) {
      getUser().then((data) => {
        if (data) {
          setUser(data);
          setLayoutLoading(false);
        }
      });
    } else {
      setLayoutLoading(false);
    }
  }, []);

  if (layoutLoading) {
    return (
      <html lang="fr">
        <body>
          <Loading />
        </body>
      </html>
    );
  }

  return (
    <html lang="fr" className={theme}>
      <body
        className={`${inter.className} flex flex-row dark:bg-slate-800 dark:text-white`}
      >
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
