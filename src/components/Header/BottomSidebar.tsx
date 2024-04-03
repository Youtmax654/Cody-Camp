import useStore from "@/hooks/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLogOut, LuSettings } from "react-icons/lu";
import DarkModeSwitch from "./DarkModeSwitch";

const BottomSidebar = () => {
  const { navUnfolded } = useStore();
  const pathName = usePathname();

  const handleLogOut = () => {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.href = "/";
  };

  return (
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
  );
};

export default BottomSidebar;
