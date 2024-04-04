import ContentMessage from "@/components/Mailbox/Message/ContentMessage";
import Send from "@/components/Mailbox/Message/Send";
import Image from "next/image";

const Discussion = ({ params }: { params: { receiverId: string } }) => {
  const receiverId = params.receiverId;

  return (
    <div className=" flex flex-1 flex-col overflow-y-scroll">
      <div className="flex flex-row items-center border-b border-solid border-black/20">
        <Image
          src={"/public/avatar.jpg"}
          alt="Profile picture"
          width={50}
          height={50}
          className=" m-3 rounded-full"
        />
        <span className=" right-0 top-0 block size-2 rounded-full bg-green-500 ring-2 ring-white md:size-3 " />
        <p className="ml-3 border-l border-solid border-black/20 p-4 text-black">
          {receiverId}
        </p>
      </div>
      <ContentMessage />
      <Send />
    </div>
  );
};

export default Discussion;
