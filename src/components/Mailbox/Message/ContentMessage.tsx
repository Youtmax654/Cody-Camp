"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ContentMessageProps {
  data: {
    senderId: string;
    receiverId: string;
    content: string;
  }[];
}

export default function ContentMessage({ data }: ContentMessageProps) {
  const [totalComments, setTotalComments] = useState(data || []);

  useEffect(() => {
    setTotalComments(data || []);
  }, [data]);

  return (
    <div className="flex h-full flex-row items-end">
      {totalComments && totalComments.map((message, index) => (
        <div key={index}>
          <Image
            src={"/public/avatar.jpg"}
            alt="Profile picture"
            width={50}
            height={50}
            className="mb-6 ml-3 rounded-full border border-solid border-black"
          />
          <p className="m-4 rounded-lg bg-indianred p-4 text-end text-white">
            {message.content}
          </p>
        </div>
      ))}
    </div>
  );
}