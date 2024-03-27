import { BiMessageRoundedDetail } from "react-icons/bi";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function ForumLink () {
return(
<Link
className="p-4 flex items-center justify-evenly w-full h-20 hover:bg-white hover:shadow-md transition-colors duration-300 ease-in-out"
href="/forum/forumId"
>
<div className="flex items-center pr-3">
  <CgProfile className="h-10 w-10" />
</div>
<div className="flex-1">
  <p>PHP, HTML</p>
  <div className="flex gap-2">
    <PiArrowBendUpLeftBold />
    <p>
      parfait,il y a 4 jours
    </p>
  </div>
</div>
<div className="flex items-center pr-3 gap-3">
  <span>PHP</span>
  <span>HTML</span>
</div>
<div className="flex items-center gap-1">
  <BiMessageRoundedDetail />
  <p>0</p>
</div>
</Link>
)}