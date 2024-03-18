"use client";
import useOutsideClikToClose from "../Hooks/useOutsideClikToClose";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
import DuaCategories from "./DuaCategories";
import { LegacyRef } from "react";
interface DuaCategoryProps {
  showCategoryItems: boolean;
  setShowCategoryItems: (showCategoryItems: boolean) => void;
}
const DuaCategoriesSidebar: React.FC<DuaCategoryProps> = ({
  showCategoryItems,
  setShowCategoryItems,
}) => {
  const refWraper: LegacyRef<HTMLDivElement> | undefined =
    useOutsideClikToClose(setShowCategoryItems);

  return (
    <div
      className={`fixed bg-gray-900/50  w-full h-full inset-0 left-0 z-[99] duration-300
   ${showCategoryItems ? "translate-x-0" : "-translate-x-[100%] "}
   `}>
      <div
        ref={refWraper}
        className={`bg-white w-[300px] xs:w-[350px]  lg:w-[400px] h-full absolute left-0 duration-300 overflow-hidden rounded-r-3xl ${
          showCategoryItems ? "translate-x-0" : "-translate-x-[100%]"
        }`}>
        <DuaCategories />
      </div>
    </div>
  );
};

export default DuaCategoriesSidebar;
