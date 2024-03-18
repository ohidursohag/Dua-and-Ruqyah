import DuaSection from "@/Components/Cards/DuaSection";
import DuaCard from "@/Components/Cards/DuaCard";
import { AllDuas, AllSubCategory } from "@/utils/types";
import { SearchParams } from "@/app/duas/[dua-category]/page";
const ShowDuas:React.FC<{
searchParams: SearchParams;
 }> = async({searchParams}) => {
   
   const language = "en";
   let url ='https://satisfying-viridian-pepper.glitch.me'
   // Fetch Sub-category data
   const subCategoryRes = await fetch(
     `${url}/sub-categories?language=${language}`,
     {
       cache: "force-cache",
     }
   );
   const allSubCategory: AllSubCategory = await subCategoryRes.json();
   // Fetch all duas data
   const duasRes = await fetch(
     `${url}/duas?language=${language}`,
     {
       cache: "force-cache",
     }
   );
   const allDua: AllDuas = await duasRes.json();
 
   const duaBySpecifCategory = allDua.filter(
     (dua) => dua.cat_id === Number(searchParams.cat)
   );
  return (
    <>
       <div className="mb-24 xl:mb-14 px-1">
        {allSubCategory
          ?.filter((subCat) => subCat.cat_id === Number(searchParams.cat))
          .map((subCategory) => (
            <div key={subCategory.subcat_id} className="space-y-5 mb-5">
              <DuaSection subCategory={subCategory} />
              {duaBySpecifCategory
                .filter(
                  (duaBySubCategory) =>
                    duaBySubCategory.subcat_id === subCategory.subcat_id
                )
                .map((dua) => (
                  <DuaCard key={dua.dua_id} dua={dua} />
                ))}
            </div>
          ))}
      </div>
    </>
  )
};

export default ShowDuas;
