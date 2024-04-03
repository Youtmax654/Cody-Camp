"use client";

import { useUser } from "@/hooks/useUser";
import ConnectedLayout from "@/layouts/ConnectedLayout";
import DisconnectedLayout from "@/layouts/DisconnectedLayout";
import { getCookie } from "@/utils/cookies";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const pathname = usePathname();
  const { getUser } = useUser();

  // useEffect(() => {
  //   checkIfUserIsConnected().then(() => setLoading(false));
  // }, [pathname]);

  // const checkIfUserIsConnected = async () => {
  //   if (pathname === "/" && getCookie("uid")) {
  //     router.push("/home");
  //   } else if (
  //     pathname !== "/" &&
  //     !pathname.startsWith("/confirmEmail") &&
  //     !getCookie("uid")
  //   ) {
  //     router.push("/");
  //   }
  // };

  useEffect(() => {
    console.log("RootLayout rendered");
  }, []);

  useEffect(() => {
    if (pathname !== "/" && getCookie("uid")) {
      setIsConnected(true);
    } else if (
      pathname === "/" &&
      pathname.startsWith("/confirmEmail") &&
      !getCookie("uid")
    ) {
      setIsConnected(false);
    }
  }, [pathname]);

  const LayoutSelector = () => {
    if (pathname === "/" || pathname.startsWith("/confirmEmail")) {
      return <DisconnectedLayout>{children}</DisconnectedLayout>;
    } else {
      return <ConnectedLayout>{children}</ConnectedLayout>;
    }
  };

  return <LayoutSelector />;
}
