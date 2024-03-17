import useOutsideClikToClose from "../Hooks/useOutsideClikToClose";
import CategoriesItems from "./CategoriesItems";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
import DuaCategories from "./DuaCategories";
interface DuaCategoryProps {
  allCategory: AllCategory;
  allDua: AllDuas;
  allSubCategory: AllSubCategory;
  showCategoryItems: boolean;
  setShowCategoryItems: (showCategoryItems: boolean) => void;
}
const DuaCategoriesSidebar: React.FC<DuaCategoryProps> = ({
  allCategory,
  allDua,
  allSubCategory,
  showCategoryItems,
  setShowCategoryItems,
}) => {
  const refWraper = useOutsideClikToClose(setShowCategoryItems);

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
        <DuaCategories
          allCategory={allCategory}
          allDua={allDua}
          allSubCategory={allSubCategory}
        />
      </div>
    </div>
  );
};

export default DuaCategoriesSidebar;
