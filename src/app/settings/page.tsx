"use client";

import ChangePassword from "@/components/Settings/Account/ChangePassword";
import PersonalInformation from "@/components/Settings/Account/PersonalInformation";
import Notifications from "@/components/Settings/Notifications/Notifications";
import { useState } from "react";

const tabs = ["Compte", "Notifications"] as const;
type Tab = (typeof tabs)[number];

function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("Compte");

  const TabContent: React.FC = () => {
    switch (activeTab) {
      case "Compte":
        return (
          <>
            <PersonalInformation />
            <ChangePassword />
          </>
        );
      case "Notifications":
        return <Notifications />;
    }
  };

  return (
    <div className="flex w-full flex-col">
      <nav className="flex list-none flex-row gap-2 border-b border-solid border-black/20 pl-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-4 font-bold transition-colors duration-300 ${
              activeTab === tab && "text-salmon"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="w-full overflow-y-scroll">
        <TabContent />
      </div>
    </div>
  );
}

export default Settings;
