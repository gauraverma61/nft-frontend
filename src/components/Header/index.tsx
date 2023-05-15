"use Client";

import React from "react";
import BiSearch from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[75px] bg-[#323232] fixed top-0 left-0 w-full flex items-center justify-between px-10 gap-10 ">
      <Link href="/">
        <span className="text-white text-4xl font-semibold">CloseSea</span>
      </Link>
      <div className="flex flex-1 bg-white rounded-md overflow-hidden h-[50px] px-5 ">
        {/* <BiSearch/> */}
        <input
          type="text"
          className=" bg-none border-none outline-none flex-1"
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <button className="px-6 h-[50px] rounded-md bg-[#F6FFDE] text-xl font-semibold text-gray-600 ">
        Connect
      </button>
    </div>
  );
};

export default Header;
