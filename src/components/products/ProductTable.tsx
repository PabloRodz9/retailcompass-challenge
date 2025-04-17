// components/ProductTable.tsx
import { usePagination } from '../../hooks/usePagination';
import { useProducts } from '../../hooks/useProducts';
import { columns } from '../../utils/products/producTableColumns';
import { mapProductsToRows } from '../../utils/products/products.utils';
import { ProductTableUI } from './ProductTableUI';

export default function ProductTable() {
    const { page, size, setPage, setSize } = usePagination();
    const { data, isLoading } = useProducts({ page, size });
    const rows = mapProductsToRows(data?.products);

    return (
        <ProductTableUI
            rows={rows}
            columns={columns}
            loading={isLoading}
            rowCount={data?.paging.total}
            page={page}
            size={size}
            onPageChange={(newPage, newSize) => {
                setPage(newPage);
                setSize(newSize);
            }}
        />
    );
}
