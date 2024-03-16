import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Settings from "./Settings";

interface SidebarClickHandler {
  openSettings: boolean;
  setOpenSettings: (openSettings: boolean) => void; // Function to set the open/closed state
}
const SettingAsSideBar = ({
  openSettings,
  setOpenSettings,
}: SidebarClickHandler) => {
  const refWraper = useOutsideClikToClose(setOpenSettings);
  return (
    <div 
      className={`fixed bg-gray-900/50  w-full h-full inset-0 right-0 z-[99] duration-300
   ${openSettings ? "translate-x-0" : "translate-x-[100%] "}
   `}>
      <div
        ref={refWraper}
        className={`bg-white w-[280px] sm:w-[300px] md:w-[350px] h-full absolute right-0 duration-300 rounded-l-3xl ${
          openSettings ? "translate-x-0" : "translate-x-[100%]"
        }`}>
        <Settings />
      </div>
    </div>
  );
};

export default SettingAsSideBar;
