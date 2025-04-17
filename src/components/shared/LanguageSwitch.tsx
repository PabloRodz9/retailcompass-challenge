import { Switch, FormControlLabel, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/useLanguageStore';
import argFlag from '../../assets/argFlag.png'
import usaFlag from '../../assets/usaFlag.png'
export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguageStore();
    const { t } = useTranslation();

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
                label={language === 'es' ? t('spanish') : t('english')}
            />
            <img style={{ width: '15%' }} src={`${language === 'es' ? argFlag : usaFlag}`} alt="country flag" />
        </Box>
    );
};
