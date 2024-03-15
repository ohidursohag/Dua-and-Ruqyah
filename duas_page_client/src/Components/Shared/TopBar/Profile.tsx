import Image from "next/image";
import profileIcon from '@/assets/icons/profile.svg'
import settingIcon from '@/assets/icons/settings.svg'
import { FaCaretDown } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="flex md:flex-row-reverse justify-end xl:flex-row items-center gap-5">
      <button className="hidden md:flex gap-1 items-center rounded-full ">
         <Image src={profileIcon} alt="profile icon" width={45} height={45}/>
         <FaCaretDown size={20} className="text-icon "/>
      </button>

      <button>
         <Image src={settingIcon} width={24} height={24} alt="setting icon"/>
      </button>
    </div>
  );
};

export default Profile;
