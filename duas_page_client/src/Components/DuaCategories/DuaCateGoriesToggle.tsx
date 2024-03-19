"use client";
import { LegacyRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import useOutsideClikToClose from "../Hooks/useOutsideClikToClose";
import { Children } from "@/utils/types";
const DuaCateGoriesToggle: React.FC<Children> = ({ children }) => {
  const [showCategoryItems, setShowCategoryItems] = useState<boolean>(false);
  const refWraper: LegacyRef<HTMLDivElement> | undefined =
    useOutsideClikToClose(setShowCategoryItems);

  return (
    <div className="w-full">
      <div
        onClick={(e) => {
          e.preventDefault();
          setShowCategoryItems(!showCategoryItems);
        }}
        className="text-primary-text px-5 py-4 w-full flex items-center gap-3">
        {" "}
        <IoMenuSharp size={24} className="" />{" "}
        <span className="">Category Name</span>{" "}
      </div>

      {/* Show Categories in Sidebar on Small Devices */}
      <div
        className={`fixed bg-gray-900/50  w-full h-full inset-0 left-0 z-[99] duration-300
   ${showCategoryItems ? "translate-x-0" : "-translate-x-[100%] "}
   `}>
        <div
          ref={refWraper}
          className={`bg-white w-[300px] xs:w-[350px]  lg:w-[400px] h-full absolute left-0 duration-300 overflow-hidden rounded-r-3xl ${
            showCategoryItems ? "translate-x-0" : "-translate-x-[100%]"
          }`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DuaCateGoriesToggle;
