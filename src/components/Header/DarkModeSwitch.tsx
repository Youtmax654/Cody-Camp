import useStore from "@/hooks/useStore";
import { LuMoon, LuSun } from "react-icons/lu";
import Switch from "../UI/Switch";

const DarkModeSwitch = () => {
  const { navUnfolded, theme, setTheme } = useStore();

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (navUnfolded) {
    return (
      <div
        className="m-2 flex flex-row items-center 
                  justify-center gap-4 rounded-md p-2 
                  font-semibold transition-colors 
                  duration-300 ease-in-out"
      >
        <LuSun size={24} />
        <Switch
          id="dark-mode"
          name="dark-mode"
          onChange={handleTheme}
          active={theme === "dark"}
        />
        <LuMoon size={24} />
      </div>
    );
  } else {
    return (
      <button
        className="m-2 flex rounded-md p-2 
                  transition-colors duration-300 
                  ease-in-out hover:bg-black/15"
        onClick={handleTheme}
      >
        {theme === "dark" ? <LuMoon size={24} /> : <LuSun size={24} />}
      </button>
    );
  }
};

export default DarkModeSwitch;
