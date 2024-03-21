import ShowDuas from "@/Components/AllDuas/ShowDuas";

import { AllDuas, AllSubCategory } from "@/utils/types";

export type SearchParams = {
  cat: string;
  subcat: string;
  dua: string;
};
const DuaPage: React.FC<{
  params: string;
  searchParams: SearchParams;

}> = async ({ params, searchParams}) => {

  const language = "en";
  let url ='https://duas-ruqyah-api.glitch.me'
  // let url ='http://localhost:5001'
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
  // console.log(params,searchParams)
  // console.log(searchParams.cat,searchParams.subcat,searchParams.dua)

 return (
   <>
     <ShowDuas searchParams={searchParams} allSubCategory={allSubCategory} duaBySpecifCategory={duaBySpecifCategory}/>
   </>
 )
};

export default DuaPage;
