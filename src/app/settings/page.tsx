"use client";

import ChangePassword from "@/components/Settings/Account/ChangePassword";
import PersonalInformation from "@/components/Settings/Account/PersonalInformation";
import Notifications from "@/components/Settings/Notifications/Notifications";
import { useState } from "react";

const tabs = ["Compte", "Notifications"] as const;
type Tab = (typeof tabs)[number];

function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("Compte");
  // const [loading, setLoading] = useState(true);

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

  // useEffect(() => {
  //   if (user) setLoading(false);
  // }, []);

  // if (loading) {
  //   return (
  //     <main className="flex flex-1 items-center justify-center">
  //       <Loading />
  //     </main>
  //   );
  // }

  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex list-none flex-row gap-2 border-b border-solid border-black/20 pl-4 dark:border-white/20">
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
      <div className="size-full overflow-y-scroll bg-gray-500/5 dark:bg-white/5">
        <TabContent />
      </div>
    </div>
  );
}

export default Settings;
