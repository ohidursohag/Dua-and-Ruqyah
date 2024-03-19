import CategoriesItems from "./CategoriesItems";
import CategorySearch from "./CategorySearch";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
const DuaCategories  = async () => {
  // console.log(allCategory,allDua,allSubCategory)
  const language = 'en'
  let url ='https://satisfying-viridian-pepper.glitch.me'
  // Fetch Category data
  const categoryRes = await fetch(`${url}/categories?language=${language}`,{
    cache:"force-cache"
  })
  const allCategory:AllCategory = await categoryRes.json()
  
  // Fetch Sub-category data
  const subCategoryRes = await fetch(`${url}/sub-categories?language=${language}`, {
    cache:"force-cache"
  })
  const allSubCategory:AllSubCategory = await subCategoryRes.json()
  
  // Fetch all duas data
  const duasRes = await fetch(`${url}/duas?language=${language}`, {
    cache:"force-cache"
  })
  const allDua:AllDuas = await duasRes.json()
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
