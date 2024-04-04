import React from "react";
import Avatar from "./Avatar";
import { User } from "@/hooks/useUser";

interface OtherUsersProps {
    user: User; 
}

    const OtherUsers: React.FC<OtherUsersProps> = ({ user }) => {
        return (
        <div className="mr-2 flex flex-1 cursor-pointer items-center space-x-3 rounded-lg border border-solid transition hover:bg-black/20">
            <Avatar />
            <div>
                <p>{user.lastName} {user.firstName}</p>
            </div>
        </div>
        );
    };

    export default OtherUsers;