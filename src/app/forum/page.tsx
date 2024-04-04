import ForumLink from "@/components/Forum/ForumLink";
import Maintenance from "@/components/Maintenance";
import Input from "@/components/UI/Input";
import Link from "next/link";

function page() {
  return <Maintenance />;

  return (
    <div className="flex size-full flex-col">
      <div className="flex justify-center gap-10 border-b border-solid border-black/20 p-6 text-center">
        <h1 className="text-4xl">Forum</h1>
        <div className="flex w-full">
          <Input placeholder="Rechercher un sujet" />
        </div>
      </div>

      <div className="flex flex-1 flex-row bg-black/5 p-5">
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
