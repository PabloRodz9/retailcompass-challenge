import { useTranslation } from 'react-i18next';
import argFlag from '../assets/argFlag.png'
import usaFlag from '../assets/usaFlag.png'

export const getLanguageMap = () => {
    const { t } = useTranslation();
    return new Map<string, { label: string; flag: string }>([
        ['es', { label: t('spanish'), flag: argFlag }],
        ['en', { label: t('english'), flag: usaFlag }],
    ]);
};