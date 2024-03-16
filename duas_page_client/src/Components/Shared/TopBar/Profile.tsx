"use client"
import Image from "next/image";
import profileIcon from '@/assets/icons/profile.svg'
import settingIcon from '@/assets/icons/settings.svg'
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import SettingAsSideBar from "../Settings/SettingAsSideBar";
const Profile = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  // console.log(openSettings)
  return (
    <div className="flex md:flex-row-reverse justify-end xl:flex-row items-center gap-5">
      <button className="hidden md:flex gap-1 items-center rounded-full ">
         <Image src={profileIcon} alt="profile icon" width={45} height={45}/>
         <FaCaretDown size={20} className="text-icon "/>
      </button>

      <button onClick={()=>setOpenSettings((openSettings)=>!openSettings)} className="2xl:hidden cursor-pointer">
         <Image src={settingIcon} width={24} height={24} alt="setting icon"/>
      </button>
      <SettingAsSideBar openSettings={openSettings} setOpenSettings={setOpenSettings} />
    </div>
  );
};

export default Profile;
