"use client";
import { AllCategory, AllSubCategory, AllDuas } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import arrowIcon from "@/assets/icons/arrow.svg";
import Link from "next/link";
import { convertToHyphenatedLowerCase } from "@/utils/convertToHyphenatedLowerCase";

const CategoriesItems: React.FC<{
  allCategory: AllCategory;
  allDua: AllDuas;
  allSubCategory: AllSubCategory;
}> = ({ allCategory, allDua, allSubCategory }) => {
  const [showSubCategories, setShowSubCategories] = useState<number | null>(
    null
  );
  const [showDuas, setShowDuas] = useState<number | null>(null);
  const [activeDua, setActiveDua] = useState<number | null>(null);

//   console.log( "Show Duas ==>", showDuas,"Show Active Dua ==>", activeDua);
  // console.log(allCategory,allDua,allSubCategory)
  return (
    <>
      <div className="space-y-5 py-5 p-2 mb-5 2lg:mb-28 xl:mb-10">
        {allCategory?.map((category, idx) => (
          <div
            onClick={(event) => {
              setShowSubCategories((prev) => (prev === category.cat_id ? null : category.cat_id));
              event.stopPropagation();
            }}
            key={category.id}
            className={` ${showSubCategories === category.cat_id ? "" : ""}`}>
            <Link
            href={`/duas/${convertToHyphenatedLowerCase(category.cat_name)}?cat=${category.cat_id}`}
              className={`inline-block w-full rounded-xl hover:bg-primary-bg  px-3 py-2 cursor-pointer duration-300 ${
                showSubCategories === category.cat_id ? "bg-primary-bg" : ""
              }`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <figure className="bg-secondary-bg p-1 rounded-lg">
                    <Image
                      src={"https://duaruqyah.com/assets/icon/duar_gurutto.svg"}
                      alt={category.cat_icon}
                      width={56}
                      height={56}
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
            <div className={`ml-8  border-l-2 border-dotted border-primary space-y-3 ${showSubCategories === category.cat_id ? "block pt-5 " : "hidden"}`}>
              {allSubCategory
                ?.filter(
                  (subcategories) => subcategories.cat_id === category.cat_id
                )
                .map((subcategory, indx) => (
                  <div
                    onClick={(event) => {
                      console.log('hit SubCategory')
                      setShowDuas((prev) => (prev === subcategory.subcat_id ? null : subcategory.subcat_id));
                      event.stopPropagation();
                    }}
                    key={subcategory.id}
                    className={`w-full pl-4 pr-2  relative cursor-pointer
                     `}>
                    <Link href={`/duas/${convertToHyphenatedLowerCase(category.cat_name)}?cat=${category.cat_id}&subcat=${subcategory.subcat_id}`} className="flex items-start">
                      <div
                        className={`bg-primary  rounded-full absolute  top-0 border-2 ${
                          showDuas === subcategory.subcat_id ? "border-transparent size-[6px] -left-1" : "-left-[5px] border-white size-[8px]"
                        }`}
                      />
                      <div
                        className={`text-sm ${
                          showDuas === subcategory.subcat_id ? "font-bold text-primary" : ""
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
                        .map((dua, index) => (
                          <div
                            onClick={(event) => {
                              console.log('hit Dua')
                              setActiveDua((prev) => prev === dua.dua_id ? null : dua.dua_id);
                              event.stopPropagation()
                            }}
                            key={dua.dua_id}
                            className={`${
                              showDuas === subcategory.subcat_id ? "block" : "hidden"
                            }`}>
                            <Link 
                            href={`/duas/${convertToHyphenatedLowerCase(category.cat_name)}?cat=${category.cat_id}&subcat=${subcategory.subcat_id}&dua=${dua.dua_id}`} 
                             className="flex items-center gap-2">
                              <Image
                                src={arrowIcon}
                                alt="pointer array Icon"
                                width={16}
                                height={20}
                              />
                              <p
                                className={`text-xs ${
                                  activeDua === dua.dua_id ? "text-primary font-bold" : "text-secondary-text"
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
