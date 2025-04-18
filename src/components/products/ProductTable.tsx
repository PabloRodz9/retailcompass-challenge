import { useTranslation } from 'react-i18next';
import { usePagination } from '../../hooks/usePagination';
import { useProducts } from '../../hooks/useProducts';
import { columns } from '../../utils/products/producTableColumns';
import { customLocaleText, mapProductsToRows } from '../../utils/products/products.utils';
import { enUS, esES } from '@mui/x-data-grid/locales';
import ProductTableUI from './ProductTableUI';


const ProductTable = () => {
    const { page, size, setPage, setSize } = usePagination();
    const { data, isLoading, error, isError } = useProducts({ page, size });
    const rows = mapProductsToRows(data?.products);
    const { i18n } = useTranslation()
    const dataGridLocaleMap = new Map([
        ['es', esES.components.MuiDataGrid.defaultProps.localeText],
        ['en', enUS.components.MuiDataGrid.defaultProps.localeText],
    ]);
    const defaultLocaleText = dataGridLocaleMap.get(i18n.language) || enUS.components.MuiDataGrid.defaultProps.localeText;
    const localeText = { ...defaultLocaleText, ...customLocaleText };

    return (
        <ProductTableUI
            rows={rows}
            columns={columns()}
            loading={isLoading}
            error={error}
            isError={isError}
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

export default ProductTable