import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Box>
                <Toolbar disableGutters>
                    <img style={{ width: '9rem', marginLeft:'1%' }} src="/logo.svg" alt="RetailCompass logo" />
                </Toolbar>
            </Box>
        </AppBar>
    );
}
export default Navbar;
