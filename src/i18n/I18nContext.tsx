import React, { useState, useCallback } from 'react';
import { I18nContext } from './i18nContext';
import type { I18nContextType } from './i18nContext';
import en from './en.json';
import it from './it.json';

type Language = 'en' | 'it';

interface TranslationValue {
  [key: string]: string | TranslationValue;
}

const translations: Record<Language, TranslationValue> = { en, it };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: string | TranslationValue = translations[language];

      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [language],
  );

  const contextValue: I18nContextType = { language, setLanguage, t };

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
}
