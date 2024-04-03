import React, { useState, useEffect } from "react";
import OtherUsers from "./OtherUsers";
import { User, useUser } from "@/hooks/useUser";
import Loading from "@/components/Loading";

function UserList() {

  const [users, setUser] = useState<User[]>({} as User[]); 
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

  const groupedUsers: User[][] = [];
  for (let i = 0; i < users.length; i += 3) {
    groupedUsers.push(users.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center justify-center p-3">
    {groupedUsers.map((group, index) => (
      <div key={index} className="flex items-center justify-center space-x-3">
        {group.map((user) => (
          <OtherUsers key={user.email} user={user} />
        ))}
      </div>
    ))}
  </div>
  );
};

export default UserList;
