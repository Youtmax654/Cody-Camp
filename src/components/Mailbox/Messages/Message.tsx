import { User } from "@/utils/types";
import Image from "next/image";

type Props = {
  content: string;
  receiver?: User | null;
};

const Message: React.FC<Props> = ({ content, receiver }) => {
  if (receiver) {
    return (
      <div className="flex flex-row items-center gap-2 p-4">
        <Image
          src={receiver?.profilePicture as string}
          alt="Profile picture"
          width={50}
          height={50}
          className="rounded-full border border-solid border-black"
        />
        <p className="rounded-lg bg-indianred p-4 text-end text-white">
          {content}
        </p>
      </div>
    );
  }

  return (
    <p className="m-4 ml-auto w-fit rounded-lg bg-indianred p-4 text-white">
      {content}
    </p>
  );
};

export default Message;
