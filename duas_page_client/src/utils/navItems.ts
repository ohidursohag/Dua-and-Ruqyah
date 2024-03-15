import home from "@/assets/icons/nav/home.svg";
import duaInfo from "@/assets/icons/nav/dua-info.svg";
import memorize from "@/assets/icons/nav/memorize.svg";
import ruqyah from "@/assets/icons/nav/ruqyah.svg";
import bookmark from "@/assets/icons/nav/bookmark.svg";
import books from "@/assets/icons/nav/books.svg";
import allDua from "@/assets/icons/nav/alldua.svg";
export const navItems = [
  {
    icon: home,
    alt: "home icon",
    linkPath: "/",
    className: "",
  },
  {
    icon: allDua,
    alt: "all-dua icon",
    linkPath: "/",
    className: "",
  },
  {
    icon: memorize,
    alt: "memorize icon",
    linkPath: "/",
    className: "",
  },
  {
    icon: bookmark,
    alt: "bookmark icon",
    linkPath: "/",
    className: "",
  },

  {
    icon: ruqyah,
    alt: "ruqyah icon",
    linkPath: "/",
    className: "hidden md:inline-block",
  },
  {
    icon: duaInfo,
    alt: "duaInfo icon",
    linkPath: "/",
    className: "hidden md:inline-block",
  },
  {
    icon: books,
    alt: "books icon",
    linkPath: "/",
    className: "hidden md:inline-block",
  },
];
