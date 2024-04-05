import useStore from "@/hooks/useStore";
import Image from "next/image";
import ContentMessage from "./ContentMessage";
import Send from "./Send";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
  const data = await prisma.messages.findMany();
  return data;
}

export default function Chat() {
  const { user } = useStore();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setMessages(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll">
      <div className="flex flex-row items-center border-b border-solid border-black/20">
        <Image
          src={user?.profilePicture as string || "avatar.jpg"}
          alt="Profile picture"
          width={50}
          height={50}
          className="m-3 rounded-full"
        />
        <span className="right-0 top-0 block size-2 rounded-full bg-green-500 ring-2 ring-white md:size-3" />
        <p className="ml-3 border-l border-solid border-black/20 p-4 text-black">
          Pseudo
        </p>
      </div>
      <ContentMessage data={messages} />
      <Send />
    </div>
  );
}
