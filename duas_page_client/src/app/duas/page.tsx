import Link from "next/link";

const DuaPageMain = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="text-2xl text-primary-text">
        Please Visit The Dua Page :
      </div>
      <Link
        href={`/duas/dua's-importance?cat=1`}
        className="text-3xl text-primary font-bold">
        {" "}
        Dua Page
      </Link>
    </div>
  );
};

export default DuaPageMain;
