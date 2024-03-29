"use client";

import { User, useUser } from "@/hooks/useUser";
import ConnectedLayout from "@/layouts/ConnectedLayout";
import DisconnectedLayout from "@/layouts/DisconnectedLayout";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

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
    getUser().then((data) => {
      if (data) {
        setUser(data);
        setLoading(false);
      }
    });
  }, [pathname]); // useEffect will run only when getUser or userDataLoaded changes

  const LayoutSelector = () => {
    if (pathname === "/" || pathname.startsWith("confirmEmail")) {
      return <DisconnectedLayout>{children}</DisconnectedLayout>;
    } else {
      return (
        <ConnectedLayout user={user} loading={loading}>
          {children}
        </ConnectedLayout>
      );
    }
  };

  // if (loading) {
  //   return (
  //     <html lang="fr">
  //       <body>
  //         <Loading />
  //       </body>
  //     </html>
  //   );
  // }

  return <LayoutSelector />;
}
