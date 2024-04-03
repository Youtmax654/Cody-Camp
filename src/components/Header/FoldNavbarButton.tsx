import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavContext } from "./Header";

const FoldNavbarButton: React.FC = () => {
  const { navUnfolded, setNavUnfolded } = React.useContext(NavContext);

  const handleNavbar = () => {
    setNavUnfolded(!navUnfolded);
  };

  return (
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
  );
};

export default FoldNavbarButton;
