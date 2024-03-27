import Avatar from "./Avatar";

const OtherUsers = () =>{
    return(
        <div className="flex flex-1 mr-2">
            <div className="
            flex 
            cursor-pointer 
            items-center 
            space-x-3 
            transition 
            border-solid border 
            rounded-lg
            hover:bg-black/20
            flex-1">
                <div className=" rounded-lg ">
                    <Avatar/>
                </div>
                Pseudo
            </div>
        </div>
    );
}
export default OtherUsers;