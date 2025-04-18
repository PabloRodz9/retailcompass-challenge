import { Switch, FormControlLabel, Box } from '@mui/material';
import { useLanguageStore } from '../../stores/useLanguageStore';
import { getLanguageMap } from '../../utils/languageMap';

export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguageStore();
    const languageMap = getLanguageMap()
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
