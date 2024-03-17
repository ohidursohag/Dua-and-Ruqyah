import Image from "next/image";
import logo from "@/assets/icons/nav/logo.svg";
import support from "@/assets/icons/nav/support.svg";
import NavIcon from "../Utilities/NavIcon";
import profile from '@/assets/icons/nav/profile.svg'
import { navItems } from "@/utils/navItems";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
    {/* Learge Device NavBar */}
    <div className=" h-[92vh] py-6 overflow-y-auto hidden rounded-3xl bg-white xl:flex items-center justify-center  scrollbar-thin">
      <div className=" h-full flex flex-col gap-10 justify-between ">
        <Link href={'/'} className="flex justify-center items-center">
          <Image src={'https://duaruqyah.com/assets/dua-logo.svg'} alt="Dua & Ruqyah logo" width={50} height={50} />
        </Link>
        <nav className="flex flex-col items-center gap-6">
          {
            navItems.map((item,idx)=> <NavIcon key={idx} icon={item.icon} linkPath={item.linkPath} alt={item.alt}/>)
          }         
        </nav>
        <Link href={''} className=" bg-primary size-[50px] rounded-xl flex justify-center items-center">
          <Image src={support} alt="Dua & Ruqyah logo" width={30} height={30} />
        </Link>
      </div>
    </div>
    {/* Small Device Navbar */}
    <div className="fixed z-10 w-full left-0 bottom-0  py-4 overflow-y-auto  rounded-t-[50px] bg-white xl:hidden  shadow-[0px_0px_2px_.5px_rgba(0,0,0,0.2)]">
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
