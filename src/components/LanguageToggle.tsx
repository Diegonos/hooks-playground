import { useI18n } from '../i18n/useI18n';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <button
      className="languageToggle"
      onClick={toggleLanguage}
      title="Toggle language"
    >
      {t('languageToggle')}
    </button>
  );
}
