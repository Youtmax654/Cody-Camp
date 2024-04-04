import useStore from "@/hooks/useStore";
import Image from "next/image";

const ContentMessage = () => {
  const { user } = useStore();

  return (
    <div className="flex h-full flex-row items-end ">
      <Image
        src={user?.profilePicture as string}
        alt="Profile picture"
        width={50}
        height={50}
        className="mb-6 ml-3 rounded-full border border-solid border-black"
      />
      <p className="m-4 rounded-lg bg-indianred p-4 text-end text-white">
        Messagehehehhehehhehhe
      </p>
    </div>
  );
};

export default ContentMessage;
