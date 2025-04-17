// components/ProductTableUI.tsx
import { DataGrid, GridColDef, GridLocaleText } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface Props {
    rows: any[];
    columns: GridColDef[];
    loading: boolean;
    rowCount?: number;
    page: number;
    size: number;
    onPageChange: (page: number, size: number) => void;
    localeText: Partial<GridLocaleText>
}

export function ProductTableUI({
    rows,
    columns,
    loading,
    rowCount,
    page,
    size,
    onPageChange,
    localeText
}: Props) {
    return (
        <Box style={{ height: '100%', width: '100%' }}>
            <DataGrid
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: (theme) => theme.palette.secondary.main,
                        color: 'white'
                    },
                }}
                rows={rows}
                columns={columns}
                loading={loading}
                localeText={localeText}
                disableColumnFilter
                paginationModel={{ page, pageSize: size }}
                paginationMode='server'
                pageSizeOptions={[5, 10, 25, 50, 100]}
                rowCount={rowCount}
                onPaginationModelChange={({ page, pageSize }) =>
                    onPageChange(page, pageSize)
                }
                disableRowSelectionOnClick
            />
        </Box>
    );
}
