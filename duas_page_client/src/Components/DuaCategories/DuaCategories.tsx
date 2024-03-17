import CategoriesItems from "./CategoriesItems";
import CategorySearch from "./CategorySearch";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
const DuaCategories : React.FC<{
  allCategory: AllCategory;
  allDua: AllDuas;
  allSubCategory: AllSubCategory;
}> = ({ allCategory, allDua, allSubCategory }) => {
  // console.log(allCategory,allDua,allSubCategory)

  return (
    <div className="h-full relative ">
      <div className="absolute top-0 w-full bg-white z-10">
        <div className="bg-primary text-white w-full py-4 text-center">
          Categories
        </div>
        <div className="p-3">
          <CategorySearch />
        </div>
      </div>

      <div  className="max-h-[700px] pt-[110px] overflow-y-auto overflow-x-hidden scrollbar-thin ">
        <CategoriesItems
          allCategory={allCategory}
          allDua={allDua}
          allSubCategory={allSubCategory}
        />
      </div>
    </div>
  );
};

export default DuaCategories;
