import React from "react";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import ForumLink from "@/components/Forum/ForumLink";

function page() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center text-center gap-10 border-b border-solid border-black/20 p-6">
        <h1 className="text-4xl">Forum</h1>
        <div className="flex w-full">
          <Input placeholder="Rechercher un sujet" />
        </div>
      </div>

      <div className="bg-black/5 flex-1 flex flex-row p-5">
        <div className="w-56 pr-5">
          <ul>
            <li>
              <Link href="/forum/page">Tout les sujets</Link>
            </li>
            <ul>
              <li>
                <Link href="/forum/page">PHP</Link>
              </li>
              <li>
                <Link href="/forum/page">SQL</Link>
              </li>
              <li>
                <Link href="/forum/page">JavaScrpit</Link>
              </li>
              <li>
                <Link href="/forum/page">HTML/CSS</Link>
              </li>
              <li>
                <Link href="/forum/page">JAVA</Link>
              </li>
            </ul>
          </ul>
        </div>

        <div className="w-full">
          <ForumLink />
        </div>
      </div>
    </div>
  );
}

export default page;
