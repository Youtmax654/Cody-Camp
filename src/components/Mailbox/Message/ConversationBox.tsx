import Link from "next/link";
import Avatar from "../Personne/Avatar";

const ConversationBox = () => {
  return (
    <Link
      href={"/mailbox/receiverIdTktCestbon"}
      className=" rounded-lg border-b border-black/20 hover:bg-black/20"
    >
      <Avatar />
    </Link>
  );
};
export default ConversationBox;