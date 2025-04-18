import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18n';

type Language = 'en' | 'es';

interface LanguageStore {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set, get) => ({
            language: i18n.language as Language,
            toggleLanguage: () => {
                //si hubiese que agregar un nuevo idioma, se puede hacer con un array/map de idiomas y cambiar el toggle por un select
                const newLang = get().language === 'en' ? 'es' : 'en';
                i18n.changeLanguage(newLang);
                set({ language: newLang });
            },
            setLanguage: (lang) => {
                i18n.changeLanguage(lang);
                set({ language: lang });
            },
        }),
        {
            name: 'language-storage',
            onRehydrateStorage: () => (state) => {
                if (state) i18n.changeLanguage(state.language);
            },
        }
    )
);
