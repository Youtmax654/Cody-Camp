import useStore from "@/hooks/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  LuCalendarClock,
  LuHome,
  LuMails,
  LuMegaphone,
  LuMessagesSquare,
} from "react-icons/lu";

const TopSidebar: React.FC = () => {
  const { navUnfolded } = useStore();
  const pathName = usePathname();

  const links = [
    { href: "/home", label: "Accueil", icon: LuHome },
    { href: "/mailbox", label: "Messagerie", icon: LuMails },
    { href: "/planning", label: "Planning", icon: LuCalendarClock },
    { href: "/announcement", label: "Annonces", icon: LuMegaphone },
    { href: "/forum", label: "Forum", icon: LuMessagesSquare },
  ];

  return (
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
  );
};

export default TopSidebar;
