import Image from "next/image";
import Link from "next/link";

const ConversationBox = () => {
  return (
    <Link
      href={"/mailbox/receiverIdTktCestbon"}
      className=" rounded-lg border-b border-black/20 hover:bg-black/20 dark:border-white/20"
    >
      <Image
        src={"/images/profilePicture.jpg"}
        alt="Profile picture"
        width={60}
        height={60}
        className="rounded-lg border border-solid border-white/20"
      />
    </Link>
  );
};
export default ConversationBox;
