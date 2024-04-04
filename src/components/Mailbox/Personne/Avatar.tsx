import useStore from "@/hooks/useStore";
import Image from "next/image";

const Avatar = () => {
  const { user } = useStore();

  return (
    <div className="relative size-20 rounded-full ">
      <Image
        src={user?.profilePicture as string}
        alt="Profile picture"
        width={90}
        height={90}
      />
      <span className="absolute right-0 top-0 size-2 rounded-full bg-green-500 ring-2 ring-white md:size-3" />
    </div>
  );
};
export default Avatar;
