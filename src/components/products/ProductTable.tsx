// components/ProductTable.tsx
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../hooks/usePagination';
import { useProducts } from '../../hooks/useProducts';
import { columns } from '../../utils/products/producTableColumns';
import { mapProductsToRows } from '../../utils/products/products.utils';
import { ProductTableUI } from './ProductTableUI';
import { GridLocaleText } from '@mui/x-data-grid';

export default function ProductTable() {
    const { page, size, setPage, setSize } = usePagination();
    const { data, isLoading } = useProducts({ page, size });
    const rows = mapProductsToRows(data?.products);
    const { t } = useTranslation()
    const localeText: Partial<GridLocaleText> = {
        noRowsLabel: t('no_rows'),
        MuiTablePagination: {
            labelRowsPerPage: t('rows_per_page'),
        },
    };
    return (
        <ProductTableUI
            rows={rows}
            columns={columns}
            loading={isLoading}
            rowCount={data?.paging.total}
            page={page}
            size={size}
            localeText={localeText}
            onPageChange={(newPage, newSize) => {
                setPage(newPage);
                setSize(newSize);
            }}
        />
    );
}
