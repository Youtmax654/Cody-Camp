"use client";

import Header from "@/components/Header/Header";
import Loading from "@/components/Loading";
import { User } from "@/hooks/useUser";
import { Inter } from "next/font/google";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export type Theme = "light" | "dark";

export default function ConnectedLayout({
  children,
  user,
  loading,
  navUnfolded,
  setNavUnfolded,
  theme,
  setTheme,
}: Readonly<{
  children: React.ReactNode;
  user: User | undefined;
  loading: boolean;
  navUnfolded: boolean;
  setNavUnfolded: Dispatch<SetStateAction<boolean>>;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>) {
  useEffect(() => {
    console.log("Connected Layout rendered");
  }, []);

  if (loading) {
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
      <body className={`${inter.className} flex flex-row`}>
        <Header
          user={user}
          theme={theme}
          setTheme={setTheme}
          navUnfolded={navUnfolded}
          setNavUnfolded={setNavUnfolded}
        />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
