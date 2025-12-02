import { createContext, useContext, useState } from "react";
import en from "./en.json";
import hi from "./hi.json";

const languages: any = { en, hi };

const LanguageContext = createContext({
  lang: "en",
  setLang: (l: string) => {},
  t: (k: string) => k
});

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState("en");

  const t = (key: string) => {
    return languages[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
