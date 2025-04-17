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
    error: Error | null;
    isError: boolean;
}

const ProductTableUI = ({
    rows,
    columns,
    loading,
    rowCount,
    page,
    size,
    onPageChange,
    localeText,
    error,
    isError
}: Props) => {
    return (
        <Box style={{ height: '100%', width: '100%' }}>
            {
                isError ?
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '80vh',
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                        }}
                    >
                        {error?.message || 'An unexpected error occurred.'} :(
                    </Box>
                    : <DataGrid
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
            }
        </Box>
    );
}


export default ProductTableUI