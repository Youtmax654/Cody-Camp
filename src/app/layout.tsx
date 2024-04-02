"use client";

import { User, useUser } from "@/hooks/useUser";
import ConnectedLayout from "@/layouts/ConnectedLayout";
import DisconnectedLayout from "@/layouts/DisconnectedLayout";
import { getCookie } from "@/utils/cookies";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

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
        <ConnectedLayout user={user} loading={loading}>
          {children}
        </ConnectedLayout>
      );
    }
  };

  return <LayoutSelector />;
}
