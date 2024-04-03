"use client";

import { User } from "@/hooks/useUser";
import { Theme } from "@/layouts/ConnectedLayout";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import BottomSidebar from "./BottomSidebar";
import FoldNavbarButton from "./FoldNavbarButton";
import TopSidebar from "./TopSidebar";
import UserInfo from "./UserInfo";

type NavContextType = {
  navUnfolded: boolean;
  setNavUnfolded: Dispatch<SetStateAction<boolean>>;
};

export const NavContext = React.createContext<NavContextType>(
  {} as NavContextType
);

function Header({
  user,
  theme,
  setTheme,
  navUnfolded,
  setNavUnfolded,
}: {
  user: User | undefined;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  navUnfolded: boolean;
  setNavUnfolded: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    console.log("Header rendered");
  }, []);

  return (
    <NavContext.Provider value={{ navUnfolded, setNavUnfolded }}>
      <div
        className={`relative flex h-full flex-col text-nowrap 
                rounded-e-xl border 
                border-solid border-black/20
                bg-white shadow-md transition-width
                duration-300 ease-out dark:bg-dark
                dark:text-white
                ${!navUnfolded ? "w-[58px]" : "w-52"}`}
      >
        <UserInfo user={user} />
        <nav
          className="flex flex-1 flex-col 
                  justify-between overflow-hidden"
        >
          <TopSidebar />
          <BottomSidebar theme={theme} setTheme={setTheme} />
        </nav>
        <FoldNavbarButton />
      </div>
    </NavContext.Provider>
  );
}

export default Header;
