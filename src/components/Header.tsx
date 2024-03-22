"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import {
  LuCalendarClock,
  LuHome,
  LuLogOut,
  LuMegaphone,
  LuMessagesSquare,
  LuSettings,
} from "react-icons/lu";
import logo from "../public/logo.jpg";

function Header() {
  const pathName = usePathname();

  const links = [
    { href: "/home", label: "Accueil", icon: LuHome },
    { href: "/mailbox", label: "Messagerie", icon: LuMessagesSquare },
    { href: "/planning", label: "Planning", icon: LuCalendarClock },
    { href: "/announcement", label: "Annonces", icon: LuMegaphone },
  ];

  const handleNavbar = () => {
    const navbar = document.querySelector("nav");
    const links = document.querySelectorAll("nav a p, nav div #log-out");
    const name = document.querySelector("header div p");
    const button = document.querySelector("header button#navbar-button");

    if (navbar?.classList.contains("w-52")) {
      navbar?.classList.remove("w-52");
      navbar?.classList.add("w-[64px]");
      links.forEach((link) => link.classList.add("hidden"));
      name?.classList.add("hidden");
      button?.classList.add("rotate-180");
    } else {
      navbar?.classList.remove("w-[64px]");
      navbar?.classList.add("w-52");
      button?.classList.remove("rotate-180");
      setTimeout(() => {
        links.forEach((link) => link.classList.remove("hidden"));
        name?.classList.remove("hidden");
      }, 150);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("uid");
    location.href = "/";
  };

  return (
    <header className="relative flex h-full flex-col bg-purple">
      <div
        className={`flex flex-row items-center 
                      gap-2 border-b border-solid 
                      border-lavender/20 p-4 
                      font-bold
                      text-white transition-colors
                      duration-300 ease-in-out
                    `}
      >
        <Image
          src={logo}
          width={35}
          height={35}
          alt="logo"
          className="rounded-lg"
        />
        <p>Maxime Penn</p>
      </div>
      <nav className="flex w-52 flex-1 flex-col justify-between transition-width duration-300 ease-out">
        <div>
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathName === href;
            return (
              <Link
                key={label}
                href={href}
                className={`flex flex-row 
                          items-center gap-2 bg-purple p-4
                          font-bold text-white 
                          transition-colors duration-300 
                          ease-in-out hover:bg-black/15
                          ${
                            isActive
                              ? "border-l-4 border-solid border-lavender bg-black/15"
                              : ""
                          }`}
              >
                <Icon size={28} />
                <p>{label}</p>
              </Link>
            );
          })}
        </div>
        <div className="border-t border-solid border-lavender/20">
          <Link
            href="/settings"
            className="flex flex-row items-center gap-2 bg-purple p-4 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-black/15"
          >
            <LuSettings size={28} />
            <p>Paramètres</p>
          </Link>
          <div
            onClick={handleLogOut}
            className="flex w-full flex-row items-center gap-2 bg-purple p-4 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-black/15"
          >
            <LuLogOut size={28} />
            <p id="log-out">Déconnexion</p>
          </div>
        </div>
      </nav>
      <button
        id="navbar-button"
        onClick={handleNavbar}
        className="absolute -right-5 
                  top-1/2 flex size-10 
                  -translate-y-1/2 
                  items-center 
                  justify-center 
                  rounded-full
                  bg-purple-200
                  shadow-md
                  focus:outline-none"
      >
        <IoIosArrowBack size={20} color="white" />
      </button>
    </header>
  );
}

export default Header;
