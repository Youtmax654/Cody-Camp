"use client";

import UserList from "@/components/Mailbox/Personne/UserList";
import useStore from "@/hooks/useStore";
import React from "react";

function Mailbox() {
  const { mailboxActiveTab } = useStore();

  const TabContent: React.FC = () => {
    switch (mailboxActiveTab) {
      case "Personnes":
        return (
          <div className="flex flex-1 flex-col">
            <UserList />
          </div>
        );
      case "Messages":
        return (
          <div className="flex flex-1 items-center justify-center text-xl font-semibold">
            Veuillez selectionner une discussion
          </div>
        );
    }
  };

  return (
    <div className=" no-scrollbar flex flex-1">
      <TabContent />
    </div>
  );
}

export default Mailbox;
