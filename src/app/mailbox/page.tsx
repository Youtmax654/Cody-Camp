"use client";

import Chat from "@/components/Mailbox/Message/Chat";
import ConversationBox from "@/components/Mailbox/Personne/ConversationBox";
import UserList from "@/components/Mailbox/Personne/UserList";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import React, { useState } from "react";

const tabs = ["Personnes", "Messages"] as const;
type Tab = (typeof tabs)[number];

function Mailbox() {
  const [activeTab, setActiveTab] = useState<Tab>("Personnes");

  const TabContent: React.FC = () => {
    switch (activeTab) {
      case "Personnes":
        return (
          <div className="flex flex-1 flex-col">
            <UserList />
            <UserList />
          </div>
        );
      case "Messages":
        return (
          <div className="flex flex-1 flex-row">
            <nav className="no-scrollbar flex w-24 flex-col overflow-y-scroll border-r border-solid border-black/20">
              <ConversationBox />
            </nav>
            <Chat />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex list-none flex-row gap-2 border-b border-solid border-black/20 pl-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-4 font-bold transition-colors duration-300 ${
              activeTab === tab && "text-indianred"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <>
          <div className="flex flex-row items-center gap-1">
            <Input />
            <Button className="p-2">Recherche</Button>
          </div>
        </>
      </nav>
      <div className=" flex flex-1 overflow-y-scroll">
        <TabContent />
      </div>
    </div>
  );
}

export default Mailbox;
