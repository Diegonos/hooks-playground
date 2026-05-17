import { createContext } from 'react';

type Language = 'en' | 'it';

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined,
);
