const ToolTip = ({title,className}:{title:string,className?:string}) => {
  return (
    <>
      <div className={`absolute -top-11 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary-text text-white rounded-md before:absolute before:size-0 before:border-t-[10px] before:border-t-primary-text before:border-r-[5px] before:border-r-transparent before:border-l-[5px] before:inset-x-1/2 before:-translate-x-1/2 before:-bottom-2 before:border-l-transparent group-hover:block hidden duration-300 text-sm ${className}`}>
        {title}
      </div>
    </>
  );
};

export default ToolTip;
