import Image from "next/image";

const ContentMessage=()=>{
    return(
        <div className="flex h-full flex-row items-end ">
            <Image src={"/public/avatar.jpg"} alt="Profile picture" width={50} height={50}
                className="border-black border-solid border rounded-full ml-3 mb-6" /> 
        <p className="text-white text-end rounded-lg m-4 p-4 bg-indianred">Messagehehehhehehhehhe</p> 
    </div>
    );
}

export default ContentMessage