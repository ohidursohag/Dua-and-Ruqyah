"use client";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import arrowIcon from "@/assets/icons/arrow.svg";
import Link from "next/link";
import { convertToHyphenatedLowerCase } from "@/utils/convertToHyphenatedLowerCase";
import { useSearchParams } from "next/navigation";
import duar_gurutto from "@/assets/categoryImages/duar_gurutto.svg";
import zikirer_fozilot from "@/assets/categoryImages/duas-excellence.svg";
import dua_kobuler_somoy from "@/assets/categoryImages/time-of-dua.svg";
import jader_dua_kobul_hoy from "@/assets/categoryImages/jader_dua_kobul_hoy.svg";
import sokal_sondha from "@/assets/categoryImages/morning-evening.svg";
import ghum from "@/assets/categoryImages/ghum.svg";
import poshak from "@/assets/categoryImages/poshak.svg";
import bari from "@/assets/categoryImages/bari.svg";
import toilet from "@/assets/categoryImages/toilet.svg";
import azan_ikamot from "@/assets/categoryImages/azan_ikamot.svg";
const categoryIcon = [
  duar_gurutto,
  zikirer_fozilot,
  dua_kobuler_somoy,
  jader_dua_kobul_hoy,
  sokal_sondha,
  ghum,
  poshak,
  bari,
  toilet,
  azan_ikamot,
];
const CategoriesItems: React.FC<{
  allCategory: AllCategory;
  allDua: AllDuas;
  allSubCategory: AllSubCategory;
}> = ({ allCategory, allDua, allSubCategory }) => {
  const searchParams = useSearchParams();
  // get Required Id's from Search params
  const category_id = Number(searchParams.get("cat"))
    ? Number(searchParams.get("cat"))
    : null;
  const subCategory_id = Number(searchParams.get("subcat"))
    ? Number(searchParams.get("subcat"))
    : null;
  const dua_id = Number(searchParams.get("dua"))
    ? Number(searchParams.get("dua"))
    : null;

  const [activeCategory, setActiveCategory] = useState<number | null>(
    category_id
  );
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
    subCategory_id
  );
  const [activeDua, setActiveDua] = useState<number | null>(dua_id);
  // console.log("param Ids ==>",category_id,subCategory_id,dua_id)
  // console.log("Active ==>",activeCategory,activeSubCategory,activeDua)
  return (
    <>
      <div className="space-y-5  p-2 mb-5 2lg:mb-28 xl:mb-10">
        {allCategory?.map((category,index) => (
          <div
            id={`cat_${category.cat_id}`}
            onClick={(event) => {
              setActiveCategory((prev) =>
                prev === category.cat_id ? category_id : category.cat_id
              );
              // console.log(category.cat_icon);
              setActiveSubCategory(category_id);
              setActiveDua(dua_id);
              event.stopPropagation();
            }}
            key={category.id}>
            <Link
              href={`/duas/${convertToHyphenatedLowerCase(
                category.cat_name
              )}?cat=${category.cat_id}`}
              className={`inline-block w-full rounded-xl hover:bg-primary-bg  px-3 py-2 cursor-pointer duration-300 ${
                activeCategory === category.cat_id ? "bg-primary-bg" : ""
              }`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <figure className="bg-secondary-bg p-2 rounded-lg">
                    <Image
                      src={categoryIcon[index]}
                      alt={category.cat_icon}
                      width={50}
                      height={50}
                    />
                  </figure>
                  <div className="space-y-1 ">
                    <h4 className="font-bold text-primary-text">
                      {category.cat_name}
                    </h4>
                    <p className="text-sm text-secondary-text">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-center border-l-2 border-l-primary-bg pl-2">
                  <p className="font-medium text-primary-text">
                    {category.no_of_dua}
                  </p>
                  <p className="text-sm text-secondary-text">Duas</p>
                </div>
              </div>
            </Link>
            {/* Get all  SubCategories under Category */}
            <div>
              <div
                className={`ml-8  border-l-2 border-dotted border-primary space-y-3 ${
                  activeCategory === category.cat_id ? "block pt-5 " : "hidden"
                }`}>
                {allSubCategory
                  ?.filter(
                    (subcategories) => subcategories.cat_id === category.cat_id
                  )
                  .map((subcategory) => (
                    <div
                      onClick={(event) => {
                        setActiveSubCategory((prev) =>
                          prev === subcategory.subcat_id
                            ? subCategory_id
                            : subcategory.subcat_id
                        );
                        setActiveDua(dua_id);
                        event.stopPropagation();
                      }}
                      key={subcategory.id}
                      className={`w-full pl-4 pr-2  relative cursor-pointer
                     `}>
                      <Link
                        href={`/duas/${convertToHyphenatedLowerCase(
                          category.cat_name
                        )}?cat=${category.cat_id}&subcat=${
                          subcategory.subcat_id
                        }`}
                        className="flex items-start">
                        <div
                          className={`bg-primary  rounded-full absolute size-[6px]  top-[5px] border-[3px] ${
                            activeSubCategory === subcategory.subcat_id
                              ? "border-transparent   -left-1"
                              : "-left-[7px] box-content border-white "
                          }`}
                        />
                        <div
                          className={`text-sm ${
                            activeSubCategory === subcategory.subcat_id
                              ? "font-bold text-primary"
                              : ""
                          }`}>
                          {subcategory.subcat_name}
                        </div>
                      </Link>
                      {/* Duas By SubCategory */}
                      <div className="space-y-5 mt-2">
                        {allDua
                          ?.filter(
                            (duas) => duas.subcat_id === subcategory.subcat_id
                          )
                          .map((dua) => (
                            <div
                              onClick={(event) => {
                                setActiveDua((prev) =>
                                  prev === dua.dua_id ? dua_id : dua.dua_id
                                );
                                event.stopPropagation();
                              }}
                              key={dua.dua_id}
                              className={`${
                                activeSubCategory === subcategory.subcat_id
                                  ? "block"
                                  : "hidden"
                              }`}>
                              <Link
                                href={`/duas/${convertToHyphenatedLowerCase(
                                  category.cat_name
                                )}?cat=${category.cat_id}&subcat=${
                                  subcategory.subcat_id
                                }&dua=${dua.dua_id}`}
                                className="flex items-center gap-2">
                                <Image
                                  src={arrowIcon}
                                  alt="pointer array Icon"
                                  width={16}
                                  height={20}
                                />
                                <p
                                  className={`text-sm ${
                                    activeDua === dua.dua_id
                                      ? "text-primary font-bold"
                                      : "text-secondary-text"
                                  }`}>
                                  {dua.dua_name}
                                </p>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesItems;
