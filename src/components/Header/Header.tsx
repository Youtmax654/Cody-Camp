"use client";

import useStore from "@/hooks/useStore";
import { useEffect } from "react";
import BottomSidebar from "./BottomSidebar";
import FoldNavbarButton from "./FoldNavbarButton";
import TopSidebar from "./TopSidebar";
import UserInfo from "./UserInfo";

function Header() {
  const { navUnfolded } = useStore();

  useEffect(() => {
    console.log("Header rendered");
  }, []);

  return (
    <div
      className={`relative flex h-full flex-col text-nowrap 
                rounded-e-xl border 
                border-solid border-black/20
                bg-white shadow-md transition-width
                duration-300 ease-out dark:border-white/20
                dark:bg-slate-800 dark:text-white
                ${!navUnfolded ? "w-[58px]" : "w-52"}`}
    >
      <UserInfo />
      <nav
        className="flex flex-1 flex-col 
                  justify-between overflow-hidden"
      >
        <TopSidebar />
        <BottomSidebar />
      </nav>
      <FoldNavbarButton />
    </div>
  );
}

export default Header;
