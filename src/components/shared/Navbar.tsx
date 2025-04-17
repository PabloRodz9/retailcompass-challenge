import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img style={{ width: '9rem', }} src="/logo.svg" alt="RetailCompass logo" />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
