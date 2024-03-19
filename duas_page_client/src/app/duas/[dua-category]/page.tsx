import ShowDuas from "@/Components/AllDuas/ShowDuas";
import { GetStaticPropsContext } from "next";

export type SearchParams = {
  cat: string;
  subcat: string;
  dua: string;
};
const DuaPage: React.FC<{
  params: string;
  searchParams: SearchParams;

}> = ({ params, searchParams}) => {

  return (
    <div className=" max-h-[90vh] overflow-y-auto scrollbar-thin">
      <ShowDuas searchParams={searchParams} />
    </div>
  );
};

export default DuaPage;
