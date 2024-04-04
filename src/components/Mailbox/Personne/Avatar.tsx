import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="flex size-16 items-center rounded-full  ">
      <Image src={"/avatar.jpg"} alt="Profile picture" className="rounded-full" width={70} height={70} />
    </div>
  );
};
export default Avatar;