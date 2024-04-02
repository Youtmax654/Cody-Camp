import React from "react";
import Avatar from "./Avatar";
import { User } from "@/hooks/useUser";

interface OtherUsersProps {
    users: User[];
}

const OtherUsers: React.FC<OtherUsersProps> = ({ users }) => {
        return (
        <div>
            {users.map((user) => (
            <div key={user.email} className="flex items-center space-x-3">
                <Avatar />
                <div>
                <p>{user.firstName} {user.lastName}</p>
                </div>
            </div>
            ))}
        </div>
        );
    };

    export default OtherUsers;
