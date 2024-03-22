import duaTitleIcon from "@/assets/icons/duaTitleIcon.svg";
import copyIcon from "@/assets/icons/copy.svg";
import shareIcon from "@/assets/icons/share.svg";
import reportIcon from "@/assets/icons/report.svg";
import bookmarkIcon from "@/assets/icons/nav/bookmark.svg";
import memorizeIcon from "@/assets/icons/nav/memorize.svg";
import Image from "next/image";
import { Dua } from "@/utils/types";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import ToolTip from "../Shared/Utilities/ToolTip";
const DuaCard: React.FC<{ dua: Dua }> = ({ dua }) => {
  return (
    <div id={`dua_${dua.dua_id}`}
    className=" p-5 w-full bg-white rounded-xl space-y-6  gap-3">
      {/* title section  */}
      <div className="flex items-center gap-3 ">
        <Image src={duaTitleIcon} alt="Dua title icon" width={35} height={35} />
        <p className="text-primary font-semibold">
          {`${dua.id}. `} {dua.dua_name}
        </p>
      </div>
      {/* Top description  */}
      {dua.top && (
        <p className="text-primary-text antialiased font-medium text-justify leading-8">
          {dua.top}
        </p>
      )}
      {/* dua arabic */}
      {dua.dua_arabic && (
        <p
          className="text-primary-text antialiased text-justify leading-[50px] text-3xl font-medium"
          dir="rtl">
          {" "}
          {dua.dua_arabic}{" "}
        </p>
      )}

      {/* Transliteration  */}
      {dua.transliteration && (
        <p className="text-primary-text italic text-justify leading-8">
          <span className="font-bold ">Transliteration: </span>
          <span className="font-medium">{dua.transliteration}</span>
        </p>
      )}
      {/* Translation  */}
      {dua.translation && (
        <p className="text-primary-text  text-justify leading-8">
          <span className="font-bold ">Translation: </span>
          <span className="font-medium">{dua.translation}</span>
        </p>
      )}
      {/* bottom description  */}
      {dua.bottom && (
        <p className="text-primary-text antialiased font-medium text-justify leading-8">
          {dua.bottom}
        </p>
      )}
      {/* Reference */}
      {dua.refference && (
        <div className="font-semibold">
          <p className="text-primary ">Reference:</p>
          <p className="text-primary-text">{dua.refference}</p>
        </div>
      )}
      {/* Play Audio & Actions icons */}
      <div className={`grid gap-5 ${dua.audio ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
        {/* Play Audio */}
        {dua.audio && (
            <AudioPlayer url={dua.audio}/>
        )}
        {/* Actions */}
        <div className="flex items-center sm:justify-end gap-10">
          <button  className="relative group">
            {/* <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary-text text-white rounded-md before:absolute before:size-0 before:border-t-[10px] before:border-t-primary-text before:border-r-[5px] before:border-r-transparent before:border-l-[5px] before:inset-x-1/2 before:-translate-x-1/2 before:-bottom-2 before:border-l-transparent group-hover:block hidden duration-300" >
              Copy
            </div> */}
            <ToolTip title="Copy"/>
            <Image
              src={copyIcon}
              alt=" copy  icon"
              width={24}
              height={24}
            />
          </button>
          <button className="relative group">
            <ToolTip title="Bookmark"/>
            <Image
              src={bookmarkIcon}
              alt=" bookmark icon"
              width={20}
              height={20}
            />
          </button>
          <button className="relative group">
          <ToolTip title="Memorize"/>
            <Image
              src={memorizeIcon}
              alt=" memorize icon"
              width={24}
              height={24}
            />
          </button>
          <button className="relative group">
          <ToolTip title="Share"/>
            <Image
              src={shareIcon}
              alt=" share icon"
              width={24}
              height={24}
            />
          </button>
          <button className="relative group">
          <ToolTip title="Report"/>
            <Image
              src={reportIcon}
              alt=" report icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
