"use client";

import React from "react";

const tabs = ["All", "Art", "Gaming", "Memberships", "PFPs", "Photography"];

const HomePage = () => {
  const [seletedFilter, setSelectedTab] = React.useState<string>("All");

  return (
    <div className="py-6">
      <div className="flex gap-5 items-center">
        {tabs.map((tab, index) => {
          return (
            <div
              onClick={() => setSelectedTab(tab)}
              key={index}
              className={`${
                seletedFilter == tab ? "bg-[#323232] text-white" : ""
              } py-2 px-3 rounded cursor-pointer font-medium`}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
