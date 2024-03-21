import duaTitleIcon from "@/assets/icons/duaTitleIcon.svg";
import copyIcon from "@/assets/icons/copy.svg";
import shareIcon from "@/assets/icons/share.svg";
import reportIcon from "@/assets/icons/report.svg";
import bookmarkIcon from "@/assets/icons/nav/bookmark.svg";
import memorizeIcon from "@/assets/icons/nav/memorize.svg";
import Image from "next/image";
import { Dua } from "@/utils/types";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
const DuaCard: React.FC<{ dua: Dua }> = ({ dua }) => {
  return (
    <>
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
      <div className={`grid  ${dua.audio ? "grid-cols-2" : "grid-cols-1"}`}>
        {/* Play Audio */}
        {dua.audio && (
            <AudioPlayer url={dua.audio}/>
        )}
        {/* Actions */}
        <div className="flex items-center justify-end gap-10">
          <button>
            <Image
              src={copyIcon}
              alt=" copy button icon"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src={bookmarkIcon}
              alt=" copy button icon"
              width={20}
              height={20}
            />
          </button>
          <button>
            <Image
              src={memorizeIcon}
              alt=" copy button icon"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src={shareIcon}
              alt=" copy button icon"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src={reportIcon}
              alt=" copy button icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default DuaCard;
