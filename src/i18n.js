import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import zhTrans from './locales/zh-cn.json'
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources : {
            zh:{
                translation:zhTrans
            }
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
