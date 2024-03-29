"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { User } from "@/hooks/useUser";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ConnectedLayout({
  children,
  user,
  loading,
}: Readonly<{
  children: React.ReactNode;
  user: User | undefined;
  loading: boolean;
}>) {
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
    <html lang="fr">
      <body className={`${inter.className} flex flex-row`}>
        <Header user={user} />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
