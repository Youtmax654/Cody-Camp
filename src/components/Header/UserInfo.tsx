import { User } from "@/hooks/useUser";
import Image from "next/image";
import React from "react";
import { NavContext } from "./Header";

type Props = {
  user: User | undefined;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  const { navUnfolded } = React.useContext(NavContext);

  return (
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
        src={"/logo.jpg"}
        width={35}
        height={35}
        alt="logo"
        className="rounded-lg"
      />
      <p className={`${!navUnfolded ? "invisible" : ""}`}>
        {user?.firstName} {user?.lastName}
      </p>
    </div>
  );
};

export default UserInfo;
