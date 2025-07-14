import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEnglish from './translation/en-lang.json'
import translationLao from './translation/la-lang.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: { escapeValue: false},
        resources: {
            en: { translation: translationEnglish},
            la: { translation: translationLao},
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    })

export default i18n