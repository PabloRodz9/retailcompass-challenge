import { Container, Grid, Paper } from "@mui/material";
import ProductTable from "../components/products/ProductTable";
import Sidebar from "../components/products/Sidebar";

export const HomePage = () => (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Sidebar />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper elevation={3}>
                    <ProductTable />
                </Paper>
            </Grid>
        </Grid>
    </Container>
);
