import Image from "next/image";
import searchIcon from "@/assets/icons/search.svg";
const CategorySearch = () => {

  return (
    <>
       <div className="relative h-full ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by Categories"
          className="bg-white placeholder:text-sm pl-10 w-full pr-3  h-[48px] rounded-md shadow-[0px_0px_2px_0.5px_rgba(0,0,0,0.1)] outline-none border border-transparent duration-300 focus:border-primary"
        />
        <button className=" w-[40px] h-[40px]  flex justify-center items-center rounded-md absolute  left-0 top-1">
          <Image src={searchIcon} alt="search icon" width={24} height={24} />
        </button>
      </div>
    </>
  )
};

export default CategorySearch;
