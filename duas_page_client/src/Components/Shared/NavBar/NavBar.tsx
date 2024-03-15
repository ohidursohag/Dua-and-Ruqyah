import Image from "next/image";
import logo from "@/assets/icons/nav/logo.svg";
import support from "@/assets/icons/nav/support.svg";
import NavIcon from "../Utilities/NavIcon";
import profile from '@/assets/icons/nav/profile.svg'
import { navItems } from "@/utils/navItems";

const NavBar = () => {
  return (
    <>
    {/* Learge Device NavBar */}
    <div className=" h-[92vh] py-6 overflow-y-auto hidden rounded-3xl bg-white xl:flex items-center justify-center  scrollbar-thin">
      <div className=" h-full flex flex-col gap-10 justify-between ">
        <figure>
          <Image src={logo} alt="Dua & Ruqyah logo" width={73} height={73} />
        </figure>
        <nav className="flex flex-col items-center gap-5">
          {
            navItems.map((item,idx)=> <NavIcon key={idx} icon={item.icon} linkPath={item.linkPath} alt={item.alt}/>)
          }         
        </nav>
        <figure>
          <Image src={support} alt="Dua & Ruqyah logo" width={73} height={73} />
        </figure>
      </div>
    </div>
    {/* Small Device Navbar */}
    <div className="fixed z-10 w-full left-0 bottom-0  py-4 overflow-y-auto  rounded-t-[50px] bg-white xl:hidden  scrollbar-thin">
    <nav className="flex items-center justify-around gap-5 w-full px-6">
          {
            navItems.map((item,idx)=> <NavIcon key={idx} icon={item.icon} linkPath={item.linkPath} alt={item.alt} className={item.className}/>)
          }    
               <NavIcon  icon={profile} linkPath={'/'} alt={'profile icon'} className={'md:hidden'}/>
        </nav>
    </div>
    </>
  );
};

export default NavBar;
