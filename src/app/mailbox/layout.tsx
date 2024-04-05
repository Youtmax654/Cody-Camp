"use client";

import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useStore from "@/hooks/useStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const tabs = ["Personnes", "Messages"] as const;

export default function MailboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { mailboxActiveTab, setMailboxActiveTab } = useStore();

  useEffect(() => {
    console.log("pathname", pathname, mailboxActiveTab);
    if (mailboxActiveTab === "Personnes" && pathname !== "/mailbox") {
      router.push("/mailbox");
    }
  }, [mailboxActiveTab]);

  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex list-none flex-row gap-2 border-b border-solid border-black/20 pl-4 dark:border-white/20">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-4 font-bold transition-colors duration-300 ${
              mailboxActiveTab === tab && "text-indianred"
            }`}
            onClick={() => setMailboxActiveTab(tab)}
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
      {children}
    </div>
  );
}
