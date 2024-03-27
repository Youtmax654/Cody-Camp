"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  LuCalendarClock,
  LuHome,
  LuLogOut,
  LuMegaphone,
  LuMessagesSquare,
  LuMoon,
  LuSettings,
  LuSun,
} from "react-icons/lu";
import logo from "../public/logo.jpg";
import Switch from "./UI/Switch";

function Header() {
  const pathName = usePathname();
  const [navUnfolded, setNavUnfolded] = useState(true);

  const links = [
    { href: "/home", label: "Accueil", icon: LuHome },
    { href: "/mailbox", label: "Messagerie", icon: LuMessagesSquare },
    { href: "/planning", label: "Planning", icon: LuCalendarClock },
    { href: "/announcement", label: "Annonces", icon: LuMegaphone },
  ];

  const handleNavbar = () => {
    setNavUnfolded(!navUnfolded);
  };

  const handleLogOut = () => {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.href = "/";
  };

  const DarkModeSwitch = () => {
    if (navUnfolded) {
      return (
        <div
          className="m-2 flex flex-row items-center 
                    justify-center gap-4 rounded-md p-2 
                    font-semibold transition-colors 
                    duration-300 ease-in-out"
        >
          <LuSun size={24} />
          <Switch id="dark-mode" name="dark-mode" />
          <LuMoon size={24} />
        </div>
      );
    } else {
      return (
        <button
          className="m-2 flex rounded-md p-2 
                    transition-colors duration-300 
                    ease-in-out hover:bg-black/15"
        >
          <LuSun size={24} />
        </button>
      );
    }
  };

  return (
    <div
      className={`relative flex h-full flex-col text-nowrap 
                rounded-e-xl border 
                border-solid border-black/20
                bg-white shadow-md transition-width
                duration-300 ease-out dark:bg-dark
                dark:text-white
                ${!navUnfolded ? "w-[58px]" : "w-52"}`}
    >
      <div
        className={`
                    flex flex-row items-center 
                    gap-2 overflow-hidden border-b 
                    border-solid border-black/20 pb-3
                    pl-2 pt-2 font-bold
                    transition-colors duration-300 ease-in-out
                  `}
      >
        <Image
          src={logo}
          width={35}
          height={35}
          alt="logo"
          className="rounded-lg"
        />
        <p className={`${!navUnfolded ? "invisible" : ""}`}>Maxime Penn</p>
      </div>
      <nav
        className="flex flex-1 flex-col 
                  justify-between overflow-hidden"
      >
        <div className="w-full">
          {links.map(({ href, label, icon: Icon }) => {
            return (
              <Link
                key={label}
                href={href}
                className={`m-2 flex flex-row
                          items-center gap-2 rounded-md p-2
                          font-semibold transition-colors duration-300
                          ease-in-out hover:bg-black/15
                          ${
                            pathName === href
                              ? "bg-indianred text-white hover:bg-indianred"
                              : ""
                          }`}
              >
                <div className="size-6">
                  <Icon size={24} />
                </div>
                <p className={`${!navUnfolded ? "invisible" : ""}`}>{label}</p>
              </Link>
            );
          })}
        </div>
        <div className="w-full border-t border-solid border-black/20">
          <Link
            href="/settings"
            className={`m-2 flex flex-row
                        items-center gap-2 rounded-md p-2
                        font-semibold transition-colors duration-300
                        ease-in-out hover:bg-black/15
                        ${
                          pathName === "/settings"
                            ? "bg-indianred text-white hover:bg-indianred"
                            : ""
                        }`}
          >
            <div className="size-6">
              <LuSettings size={24} />
            </div>
            <p className={`${!navUnfolded ? "invisible" : ""}`}>Paramètres</p>
          </Link>
          <div
            onClick={handleLogOut}
            className="m-2 flex cursor-pointer
                      flex-row items-center gap-2 
                      rounded-md p-2 font-semibold 
                      transition-colors duration-300 
                      ease-in-out hover:bg-black/15"
          >
            <div className="size-6">
              <LuLogOut size={24} />
            </div>
            <p id="log-out" className={`${!navUnfolded ? "invisible" : ""}`}>
              Déconnexion
            </p>
          </div>
          <DarkModeSwitch />
        </div>
      </nav>
      <button
        id="navbar-button"
        onClick={handleNavbar}
        className={`absolute -right-3 top-4 z-50 
                  flex size-5 items-center 
                  justify-center rounded-full bg-indianred 
                  shadow-md focus:outline-none
                  ${!navUnfolded ? "rotate-180" : ""}`}
      >
        <IoIosArrowBack size={15} color="white" />
      </button>
    </div>
  );
}

export default Header;
