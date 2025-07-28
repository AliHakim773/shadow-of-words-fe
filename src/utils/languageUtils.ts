import i18n from 'i18next';

export const LANGUAGE_KEY = 'i18nextLng';

export const getStoredLanguage = (): string => {
  return localStorage.getItem(LANGUAGE_KEY) || 'ar';
};

export const setStoredLanguage = (language: string): void => {
  localStorage.setItem(LANGUAGE_KEY, language);
  i18n.changeLanguage(language);
};

export const toggleLanguage = (): void => {
  const currentLang = i18n.language;
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setStoredLanguage(newLang);
};

export const isRTL = (): boolean => {
  return i18n.language === 'ar';
}; 