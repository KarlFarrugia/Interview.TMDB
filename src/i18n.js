import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TMDB_EN } from "./Languages/en-EN.js"; // source for the english language
import { TMDB_DE } from "./Languages/de-DE.js"; // source for the german language
import { TMDB_IT } from "./Languages/it-IT.js"; // source for the italian language

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: TMDB_EN.translation, // english translations
      de: TMDB_DE.translation, // german translations
      it: TMDB_IT.translation  // italian translations
    },
    lng: "en",
    fallbackLng: "en", // if translation is missing then fallback on english
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });
export default i18n;
