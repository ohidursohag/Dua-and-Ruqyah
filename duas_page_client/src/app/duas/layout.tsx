import DuaCateGoriesToggle from "@/Components/DuaCategories/DuaCateGoriesToggle";
import DuaCategories from "@/Components/DuaCategories/DuaCategories";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import Settings from "@/Components/Shared/Settings/Settings";
import TopBar from "@/Components/Shared/TopBar/TopBar";
import { Children } from "@/utils/types";

const DuasLayout: React.FC<Children> = async ({ children }) => {
  return (
    <>
      <div className=" grid xl:grid-cols-[105px,1fr] gap-6">
        <NavBar />
        <div className="grid grid-rows-[68px,1fr] md:grid-rows-[91px,1fr] xl:grid-rows-[52px,1fr] gap-6">
          <TopBar />
          <div className="grid grid-col-1 px-3 2lg:grid-cols-[350px,1fr] xl:grid-cols-[350px,1fr]  2xl:grid-cols-[320px,1fr,300px] 2xl:px-0 3xl:grid-cols-[350px,1fr,300px] gap-6">
            <div className="hidden 2lg:block h-[82.5vh] rounded-3xl bg-white overflow-hidden">
              <DuaCategories />
            </div>
            <div className=" 2lg:hidden  rounded-xl bg-white flex items-center">
              <DuaCateGoriesToggle>
                <DuaCategories />
              </DuaCateGoriesToggle>
            </div>
            {children}
            <div className="hidden 2xl:block h-[82.5vh] rounded-3xl bg-white">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuasLayout;
