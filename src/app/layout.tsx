"use client";

import { User, useUser } from "@/hooks/useUser";
import ConnectedLayout from "@/layouts/ConnectedLayout";
import DisconnectedLayout from "@/layouts/DisconnectedLayout";
import { getCookie } from "@/utils/cookies";
import { usePathname, useRouter } from "next/navigation";
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
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    getCurrentTheme() ? "dark" : "light"
  );
  const [navUnfolded, setNavUnfolded] = useState(true);

  const router = useRouter();
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

  useEffect(() => {
    getUser().then((data) => {
      if (data) {
        setUser(data);
        setLoading(false);
      }
    });
  }, [isConnected]); // useEffect will run only when getUser or userDataLoaded changes

  const LayoutSelector = () => {
    if (pathname === "/" || pathname.startsWith("/confirmEmail")) {
      return <DisconnectedLayout>{children}</DisconnectedLayout>;
    } else {
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ConnectedLayout
            user={user}
            loading={loading}
            navUnfolded={navUnfolded}
            setNavUnfolded={setNavUnfolded}
            theme={theme}
            setTheme={setTheme}
          >
            {children}
          </ConnectedLayout>
        </ThemeContext.Provider>
      );
    }
  };

  return <LayoutSelector />;
}
