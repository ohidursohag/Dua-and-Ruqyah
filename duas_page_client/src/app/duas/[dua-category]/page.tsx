import DuaSection from "@/Components/AllDuas/DuaSection";
import DuaCard from "@/Components/Cards/DuaCard";
import { allDua, allSubCategory } from "@/utils/testData";
import { AllDuas } from "@/utils/types";
type SearchParams = {
  cat: string;
  subcat: string;
  dua: string;
};
const Home: React.FC<{ params: string; searchParams: SearchParams }> = ({
  params,
  searchParams,
}) => {
  // console.log(allDua);

  const duaBySpecifCategory = allDua.filter(
    (dua) => dua.cat_id === Number(searchParams.cat)
  );
  
  // console.log(duaBySpecifCategory);
  // console.log(params, searchParams);
  return (
    <div className=" max-h-[90vh] overflow-y-auto scrollbar-thin">
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
    </div>
  );
};

export default Home;
