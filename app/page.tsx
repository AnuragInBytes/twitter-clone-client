import Image from "next/image";
import { BsTwitter } from "react-icons/bs"
import sideBarMenuItems from "@/constants/SideBarElements";
import FeedCard from "@/components/FeedCard";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-8 h-screen w-screen px-64">
        <div className="col-span-2 pt-2 pl-10">
          <div className="text-3xl hover:bg-neutral-800 rounded-full p-3 w-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-lg pr-8">
            <ul>
              {sideBarMenuItems.map(item =>
              <li className="flex justify-start items-center gap-4 hover:bg-neutral-800 rounded-full mt-2 pl-3 pr-6 py-2 w-fit transition-all cursor-pointer" key={item.title}>
                <span><item.icon /></span>
                <span>{item.title}</span>
              </li>)}
            </ul>
            <button className="bg-[#1D9BF0] font-semibold px-5 py-2.5 rounded-full w-full mt-8 hover:bg-blue-500 transition-all">Tweet</button>
          </div>
        </div>
        <div className="col-span-4 border-r-[1px] border-l-[1px] border-neutral-700">
          <FeedCard />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}