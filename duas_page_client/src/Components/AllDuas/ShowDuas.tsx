"use client";
import DuaCard from "@/Components/Cards/DuaCard";
import { AllDuas, AllSubCategory } from "@/utils/types";
import { SearchParams } from "@/app/duas/[dua-category]/page";
import { useEffect } from "react";

const ShowDuas: React.FC<{
  searchParams: SearchParams;
  allSubCategory: AllSubCategory;
  duaBySpecifCategory: AllDuas;
}> = ({ searchParams, allSubCategory, duaBySpecifCategory }) => {
  const { cat, dua, subcat } = searchParams;
useEffect(()=>{
  if (cat && subcat && !dua) {
    const targetElement = document.getElementById(`section_${subcat}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth'});
      }   
  }else if (cat && subcat && dua) {
    const targetElement = document.getElementById(`dua_${dua}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', });
      }  
  }
},[cat, dua, subcat])
  return (
    <>
      <div className="mb-24 xl:mb-14 px-1 ">
        {allSubCategory
          ?.filter((subCat) => subCat.cat_id === Number(searchParams.cat))
          .map((subCategory) => (
            <div key={subCategory.subcat_id} className="space-y-5 mb-5">
              <div
                id={`section_${subCategory.subcat_id}`}
                className="text-primary-text px-5 py-4 w-full bg-white rounded-xl flex items-center gap-3">
                <p className="text-primary font-semibold">Section: </p>
                <span className="">{subCategory.subcat_name}</span>{" "}
              </div>
              {duaBySpecifCategory
                .filter(
                  (duaBySubCategory) =>
                    duaBySubCategory.subcat_id === subCategory.subcat_id
                )
                .map((dua) => (
                  <div
                    key={dua.dua_id}
                    id={`dua_${dua.dua_id}`}
                    className=" p-5 w-full bg-white rounded-xl space-y-6  gap-3">
                    <DuaCard dua={dua} />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default ShowDuas;
