import useStore from "@/hooks/useStore";
import Image from "next/image";
import Link from "next/link";

type Props = {
  receiverId: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  profilePicture: string;
};

const UserContact: React.FC<Props> = ({
  receiverId,
  firstName,
  lastName,
  profilePicture,
}) => {
  const { setMailboxActiveTab } = useStore();

  return (
    <Link
      href={`/mailbox/${receiverId}`}
      className="flex min-w-[200px] items-center gap-2 rounded-lg border border-solid border-white/20 p-2 hover:bg-black/20"
      onClick={() => setMailboxActiveTab("Messages")}
    >
      <Image
        src={profilePicture}
        alt="Profile picture"
        width={60}
        height={60}
        className="rounded-lg border border-solid border-white/20"
      />
      {firstName} {lastName}
    </Link>
  );
};
export default UserContact;
