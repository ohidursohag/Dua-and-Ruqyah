import { poppins } from "@/utils/fonts";
import Image from "next/image";
const TitleLogo = () => {

  return (
    <div className="h-full flex items-center">
      {/* Page Name */}
       <div className={`h-full font-medium text-primary-text text-2xl flex items-center md:hidden xl:flex ${poppins.className}`}> Duas Page </div>
       {/* Logo */}
       <div className="hidden md:flex items-center gap-2 xl:hidden bg-white h-[50px] ">
       <figure className="size-[50px]">
          <Image src={'https://duaruqyah.com/assets/dua-logo.svg'} alt="Dua & Ruqyah logo" width={100} height={100} className="size-[50px]"/>
        </figure>
        <div className={` font-medium text-primary-text text-xl `}> Dua & Ruqyah </div>
       </div>
    </div>
  )
};

export default TitleLogo;
