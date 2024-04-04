import React, { useState, useEffect } from "react";
import OtherUsers from "./OtherUsers";
import { useUser } from "@/hooks/useUser";
import Loading from "@/components/Loading";
import { User } from "@/utils/types";

function UserList() {

  const [users, setUser] = useState<User[] >([]); 
  const [loading, setLoading] = useState(true);
  const { getAllUsers } = useUser();

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        if(data)
        setUser(data); 
        setLoading(false);
      })
      .catch((error: any) => console.error("Error fetching users:", error));
  }, [getAllUsers]);

  
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
        <OtherUsers key={user.email} user={user}/>
      ))}
    </div>
  );
};

export default UserList;
