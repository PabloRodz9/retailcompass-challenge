import { Box, Typography } from '@mui/material';
import { useFilterStore } from '../../stores/useFilterStore';
import FilterSelect from '../shared/FilterSelect';
import { statuses } from '../../utils/statuses';
import { brands } from '../../utils/brands';

export default function SidebarFilters() {
    const brand = useFilterStore((state) => state.brand)
    const setBrand = useFilterStore((state) => state.setBrand)
    const status = useFilterStore((state) => state.status)
    const setStatus = useFilterStore((state) => state.setStatus)

    return (
        <Box sx={{ p: 2, height: '100%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', width: '100%' }}>
            <Typography sx={{ mb: 2 }} variant="h6" gutterBottom>Filtros</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                <FilterSelect
                    label="Estado"
                    value={status}
                    onChange={setStatus}
                    options={statuses}
                />

                <FilterSelect
                    label="Marca"
                    value={brand}
                    onChange={setBrand}
                    options={brands}
                />
            </Box>
        </Box>
    );
}
