import useStore from "@/hooks/useStore";
import Image from "next/image";

const UserInfo = () => {
  const { user, navUnfolded } = useStore();

  return (
    <div
      className={`
                    flex flex-row items-center 
                    gap-2 overflow-hidden border-b 
                    border-solid border-black/20 pb-3
                    pl-2 pt-2 font-bold transition-colors
                    duration-300 ease-in-out dark:border-white/20
                  `}
    >
      <Image
        src={user?.profilePicture as string}
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
