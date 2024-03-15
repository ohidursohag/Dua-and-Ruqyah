import DuaCategories from "@/Components/DuaCategories/DuaCategories";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import Settings from "@/Components/Shared/Settings/Settings";
import TopBar from "@/Components/Shared/TopBar/TopBar";
import { Children } from "@/utils/types";

const DuasLayout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen grid xl:grid-cols-[105px,1fr] 2xl:grid-cols-[105px,1fr] 3xl:grid-cols-[105px,1fr] gap-6">
        <NavBar />
        <div className="grid xl:grid-rows-[52px,1fr] gap-6">
          <TopBar />
          <div className="grid xl:grid-cols-[350px,1fr,270px] 3xl:grid-cols-[350px,1fr,300px] gap-6">
            <DuaCategories/>
            {children}
            <Settings/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuasLayout;
