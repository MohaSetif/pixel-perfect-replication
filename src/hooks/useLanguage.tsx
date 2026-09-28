import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: (typeof translations)["en"];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("hu");

  const toggle = () => setLang((l) => (l === "hu" ? "en" : "hu"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
