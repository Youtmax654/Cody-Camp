import useStore from "@/hooks/useStore";
import UserContact from "./UserContact";

const UserList = () => {
  const { users, setUsers } = useStore();

  return (
    <div className="flex flex-row gap-4 p-3">
      {users.map((user) => (
        <UserContact
          key={user.id}
          receiverId={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          profilePicture={user.profilePicture as string}
        />
      ))}
    </div>
  );
};
export default UserList;
