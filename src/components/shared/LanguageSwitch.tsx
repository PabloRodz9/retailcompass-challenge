import { Switch, FormControlLabel, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/useLanguageStore';
import argFlag from '../../assets/argFlag.png';
import usaFlag from '../../assets/usaFlag.png';


export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguageStore();
    const { t } = useTranslation()
    
    const languageMap = new Map<string, { label: string; flag: string }>([
        ['es', { label: t('spanish'), flag: argFlag }],
        ['en', { label: t('english'), flag: usaFlag }],
    ]);

    const currentLanguage = languageMap.get(language)
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
                control={
                    <Switch
                        checked={language === 'es'}
                        onChange={toggleLanguage}
                        color="secondary"
                    />
                }
                label={currentLanguage.label}
            />
            <img style={{ width: '15%' }} src={currentLanguage.flag} alt="country flag" />
        </Box>
    );
};
