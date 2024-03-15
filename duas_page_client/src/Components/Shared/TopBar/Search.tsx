import Image from "next/image";
import searchIcon from "@/assets/icons/search.svg";

const Search = () => {
  return (
    <div className="hidden md:block">
      <div className="relative h-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by Dua Name"
          className="xl:bg-white md:bg-[#F3F4F6] placeholder:text-sm  px-5 md:w-[288px] xl:w-[352px] h-[48px] rounded-md shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.1)] outline-none border border-transparent duration-300 focus:border-primary"
        />
        <button className=" w-[54px] h-[40px] xl:bg-[#F3F4F6] md:bg-white flex justify-center items-center rounded-md absolute  right-1 top-1">
          <Image src={searchIcon} alt="search icon" width={24} height={24} />
          
        </button>
      </div>
    </div>
  );
};

export default Search;
