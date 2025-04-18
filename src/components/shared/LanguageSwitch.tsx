import { Switch, FormControlLabel, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/useLanguageStore';
import { languageMap } from '../../i18n';


export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguageStore();
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
