export type Children = {
  children?: React.ReactNode
};

export type AllCategory = {
  id: number;
  cat_id: number;
//   cat_name_bn: string;
//   cat_name_en: string;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}[];

export type AllSubCategory = {
  id: number;
  cat_id: number;
  subcat_id: number;
//   subcat_name_bn: string;
//   subcat_name_en: string;
  subcat_name: string;
  no_of_dua: number;
}[];

export type AllDuas = {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
//   dua_name_bn?: string;
//   dua_name_en?: string;
  dua_name: string;
//   top_bn?: string | null;
//   top_en?: string | null;
  top: string | null;
  dua_arabic?: string | null;
//   clean_arabic?: string | null;
//   transliteration_bn?: string | null;
//   transliteration_en?: string | null;
  transliteration?: string | null;
  dua_indopak?: string | null;
//   translation_bn?: string | null;
//   translation_en?: string | null;
  translation: string | null;
//   bottom_bn?: string | null;
//   bottom_en?: string | null;
  bottom?: string | null;
//   refference_bn?: string | null;
//   refference_en?: string | null;
  refference?: string | null;
  audio: string | null;
}[];

export type AllDataTogether= AllCategory & AllSubCategory & AllDuas
