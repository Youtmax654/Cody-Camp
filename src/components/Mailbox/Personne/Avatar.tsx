import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="relative size-20 rounded-full ">
      <Image src={"/avatar.jpg"} alt="Profile picture" width={90} height={90} />
    </div>
  );
};
export default Avatar;
