"use client";

import ConnectedLayout from "@/layouts/ConnectedLayout";
import DisconnectedLayout from "@/layouts/DisconnectedLayout";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, createContext } from "react";

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
  const pathname = usePathname();

  // useEffect(() => {

  // })

  const LayoutSelector = () => {
    if (pathname === "/" || pathname.startsWith("/confirmEmail")) {
      return <DisconnectedLayout>{children}</DisconnectedLayout>;
    } else {
      return <ConnectedLayout>{children}</ConnectedLayout>;
    }
  };

  return <LayoutSelector />;
}
