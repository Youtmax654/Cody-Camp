import Send from "./Send";
import Image from "next/image";
import ContentMessage from "./ContentMessage";

const Chat =()=>{
    return(
        <div className=" flex flex-col flex-1 overflow-y-scroll">
            <div className="border-black/20 border-b border-solid flex flex-row items-center">
                <Image src={"/public/avatar.jpg"} alt="Profile picture" width={50} height={50}
                className=" rounded-full m-3" /> 
                <span className=" right-0 top-0 size-2 block rounded-full bg-green-500 ring-2 ring-white md:size-3 "/>
                <p className="text-black ml-3 border-black/20 border-solid border-l p-4">Pseudo</p>
            </div>
            <ContentMessage/>
            <Send/>
        </div>
    );
}

export default Chat;