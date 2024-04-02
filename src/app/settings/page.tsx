"use client";

import Loading from "@/components/Loading";
import ChangePassword from "@/components/Settings/Account/ChangePassword";
import PersonalInformation from "@/components/Settings/Account/PersonalInformation";
import Notifications from "@/components/Settings/Notifications/Notifications";
import { User, useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";

const tabs = ["Compte", "Notifications"] as const;
type Tab = (typeof tabs)[number];

function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("Compte");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);

  const { getUser } = useUser();

  useEffect(() => {
    getUser().then((data) => {
      if (data) {
        setUser(data);
        setLoading(false);
      }
    });
  }, []);

  const TabContent: React.FC = () => {
    switch (activeTab) {
      case "Compte":
        return (
          <>
            <PersonalInformation user={user} />
            <ChangePassword user={user} />
          </>
        );
      case "Notifications":
        return <Notifications />;
    }
  };

  if (loading) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <Loading />
      </main>
    );
  }

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
      </nav>
      <div className="size-full overflow-y-scroll bg-gray-500/5">
        <TabContent />
      </div>
    </div>
  );
}

export default Settings;
