import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import { LanguageSwitch } from './LanguageSwitch';

function Navbar() {
    return (
        <AppBar position="static">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                <>
                    <Toolbar disableGutters>
                        <img style={{ width: '9rem', marginLeft: '1%' }} src="/logo.svg" alt="RetailCompass logo" />
                    </Toolbar>
                </>
                <>
                    <LanguageSwitch />
                </>
            </Box>
        </AppBar>
    );
}
export default Navbar;
