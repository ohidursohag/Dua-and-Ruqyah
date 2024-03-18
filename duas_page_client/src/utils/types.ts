export type Children = {
  children?: React.ReactNode
};
export type Category = {
  id: number;
  cat_id: number;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}
export type AllCategory = Category[]
export type SubCategory = {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name: string;
  no_of_dua: number;
};
export type AllSubCategory = SubCategory[]
export type Dua={
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name: string;
  top: string | null;
  dua_arabic?: string | null;
  transliteration?: string | null;
  dua_indopak?: string | null;
  translation: string | null;
  bottom?: string | null;
  refference?: string | null;
  audio: string | null;
}
export type AllDuas = Dua[]

export type AllDataTogether= AllCategory & AllSubCategory & AllDuas



