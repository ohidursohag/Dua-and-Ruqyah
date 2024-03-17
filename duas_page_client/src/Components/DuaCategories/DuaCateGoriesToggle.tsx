"use client";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import DuaCategoriesSidebar from "./DuaCategoriesSidebar";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
const DuaCateGoriesToggle: React.FC<{
   allCategory: AllCategory;
   allDua: AllDuas;
   allSubCategory: AllSubCategory;
 }> = ({ allCategory, allDua, allSubCategory }) => {
  const [showCategoryItems, setShowCategoryItems] = useState<boolean>(false);
//   console.log(showCategoryItems)
  return (
    <div className="w-full">
      <div
        onClick={() => setShowCategoryItems(!showCategoryItems)}
        className="text-primary-text px-5 py-4 w-full flex items-center gap-3">
        {" "}
        <IoMenuSharp size={24} className="" />{" "}
        <span className="">Category Name</span>{" "}
      </div>
      <DuaCategoriesSidebar
      allCategory={allCategory}
      allDua={allDua}
      allSubCategory={allSubCategory}
        setShowCategoryItems={setShowCategoryItems}
        showCategoryItems={showCategoryItems}
      />
    </div>
  );
};

export default DuaCateGoriesToggle;
