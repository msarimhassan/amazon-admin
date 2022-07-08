import i18 from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-US',
        debug: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        // react: {
        //     wait: true,
        // },
    });
export default i18next;