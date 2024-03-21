import CategoriesItems from "./CategoriesItems";
import CategorySearch from "./CategorySearch";

import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
const DuaCategories  = async () => {
  // console.log(allCategory,allDua,allSubCategory)
  const language = 'en'
  let url ='https://duas-ruqyah-api.glitch.me'
  // let url ='http://localhost:5001'
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
    <>
      <div  className="h-full">
        <CategoriesItems
          allCategory={allCategory}
          allDua={allDua}
          allSubCategory={allSubCategory}
        />
      </div>
    </>
  );
};

export default DuaCategories;
