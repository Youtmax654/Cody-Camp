import Avatar from "./Avatar";

const OtherUsers = () => {
  return (
    <div className="mr-2 flex flex-1">
      <div
        className="
            flex 
            flex-1 
            cursor-pointer 
            items-center 
            space-x-3 
            rounded-lg border 
            border-solid
            transition
            hover:bg-black/20"
      >
        <div className=" rounded-lg ">
          <Avatar />
        </div>
        Pseudo
      </div>
    </div>
  );
};
export default OtherUsers;
