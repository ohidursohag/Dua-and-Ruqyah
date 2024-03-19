"use client";
import { Children } from "@/utils/types";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

export const AppContextProvider: React.FC<Children> = ({ children }) => {
  const [language, setLanguage] = useState<"bn" | "en">("en");

  const contextInfo = {
    language,
    setLanguage,
  };

  return (
    <AppContext.Provider value={contextInfo}>{children}</AppContext.Provider>
  );
};

export default function useAppContext() {
   return useContext(AppContext)
}