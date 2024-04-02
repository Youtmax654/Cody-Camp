import React, { useState, useEffect } from "react";
import OtherUsers from "./OtherUsers";
import { User, useUser } from "@/hooks/useUser";
import Loading from "@/components/Loading";

function UserList() {

  const [users, setUser] = useState<User[]>([]); 
  const [loading, setLoading] = useState(true);
  const { getAllUsers } = useUser();

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUser(data); 
        setLoading(false);
      })
      .catch((error: any) => console.error("Error fetching users:", error));
  }, []);
  
  if (loading) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <Loading />
      </main>
    );
  }

  return (
    <div className="flex flex-row items-center justify-center p-3">
      {users.map((user) => (
        <OtherUsers key={user.email} users={users} />
      ))}
    </div>
  );
};

export default UserList;
