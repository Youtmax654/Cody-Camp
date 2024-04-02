"use client";

import Calendar from "@/components/Home/Calendar";
import Loading from "@/components/Loading";
import { User, useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const { getUser } = useUser();

  useEffect(() => {
    console.log("Getting user");
    getUser().then((data) => {
      if (data) {
        setUser(data);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h1>Bienvenue {user?.firstName} !</h1>
      <Calendar />
    </main>
  );
}

export default Home;
