import Image from "next/image";
import Link from "next/link";

type navIcon = {
  className?: string;
  icon: string;
  linkPath:string,
  alt:string
};
const NavIcon = ({ className, icon,linkPath,alt }: navIcon) => {
  return (
    <Link
      href={linkPath}
      className={`${className} hover:scale-110 duration-300 bg-primary-bg rounded-full`}>
      <figure className="flex justify-center items-center size-8 sm:size-10">
      <Image src={icon} width={20} height={20} alt={alt} className='size-5 sm:size-6' />
      </figure>
    </Link>
  );
};

export default NavIcon;
