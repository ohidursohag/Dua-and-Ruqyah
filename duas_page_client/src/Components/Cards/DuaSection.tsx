import { SubCategory } from "@/utils/types";

const DuaSection: React.FC<{ subCategory: SubCategory }> = ({
  subCategory,
}) => {
  return (
    <>
      <div
        id={`section_${subCategory.subcat_id}`}
        className="text-primary-text px-5 py-4 w-full bg-white rounded-xl flex items-center gap-3">
        <p className="text-primary font-semibold">Section: </p>
        <span className="">{subCategory.subcat_name}</span>{" "}
      </div>
    </>
  );
};

export default DuaSection;
