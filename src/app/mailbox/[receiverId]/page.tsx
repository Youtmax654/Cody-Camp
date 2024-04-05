"use client";

import Loading from "@/components/Loading";
import Message from "@/components/Mailbox/Messages/Message";
import Send from "@/components/Mailbox/Messages/Send";
import useStore from "@/hooks/useStore";
import { pusher } from "@/utils/pusher";
import { User } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Messages = {
  id: number;
  receiverId: string;
  content: string;
  senderId: string;
  datetime: Date | null;
};

async function getReceiver(receiverId: string): Promise<User> {
  return await fetch("/api/user/receiver", {
    method: "GET",
    headers: {
      receiverId: receiverId,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
}

async function getMessages(uid: string, receiverId: string): Promise<any> {
  return await fetch("/api/messages", {
    method: "GET",
    headers: {
      uid: uid,
      receiverId: receiverId,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
}

const Discussion = ({ params }: { params: { receiverId: string } }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useStore();
  const receiverId = params.receiverId;
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const [receiver, setReceiver] = useState<User>({} as User);
  const [messages, setMessages] = useState<Messages[]>([] as Messages[]);

  useEffect(() => {
    const channel = pusher.subscribe("messenger");

    channel.bind("new-message", (data: any) => {
      setMessages((prev) => [...prev, data]);
    });

    if (receiverId) {
      getReceiver(receiverId).then((receiver) => {
        setReceiver(receiver);
        getMessages(user?.id as string, receiverId).then((messages) => {
          setMessages(messages);
          setLoading(false);
        });
      });
    } else {
      router.push("/mailbox");
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex h-[92vh] flex-1 flex-col overflow-hidden">
      <div className="flex flex-row items-center border-b border-solid border-black/20 dark:border-white/20 dark:text-white">
        <Image
          src={receiver.profilePicture as string}
          alt="Profile picture"
          width={50}
          height={50}
          className=" m-3 rounded-full"
        />
        <p className="ml-3 border-l border-solid border-black/20 p-4 dark:border-white/20">
          {receiver.firstName} {receiver.lastName}
        </p>
      </div>
      <div className="flex-1 overflow-y-scroll">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) =>
            receiverId === message.receiverId ? (
              <Message key={message.id} content={message.content} />
            ) : (
              <Message
                key={message.id}
                content={message.content}
                receiver={receiver}
              />
            )
          )
        ) : (
          <p>No messages available</p>
        )}
        <div ref={messagesEndRef} />
      </div>
      <Send uid={user?.id as string} receiverId={receiverId} />
    </div>
  );
};

export default Discussion;
