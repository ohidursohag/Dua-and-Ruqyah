import Profile from "./Profile";
import Search from "./Search";
import TitleLogo from "./TitleLogo";

const TopBar = () => {
  return (
    <div className="md:bg-white flex items-center justify-center xl:bg-transparent md:shadow-[0px_1px_8px_0px_rgba(0,0,0,0.1)] xl:shadow-none">
      {/* TopBar Learge Device */}
      <div className=" w-full grid grid-cols-2 md:grid-cols-[1fr,450px] lg:grid-cols-2 px-2 md:px-3 xl:px-0 ">
        <TitleLogo/>
        <div className="flex justify-end md:justify-between  items-center h-full">
          <Search/>
          <Profile/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
