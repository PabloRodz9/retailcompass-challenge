import { render, screen } from '@testing-library/react';
import i18n from '../../i18n';
import ProductTable from '../products/ProductTable';
import { vi, type Mock } from 'vitest';
import { I18nextProvider } from 'react-i18next';

vi.mock('../../hooks/usePagination', () => ({
    usePagination: vi.fn(() => ({
        page: 1,
        size: 10,
        setPage: vi.fn(),
        setSize: vi.fn(),
    })),
}));

let useProducts: Mock;
vi.mock('../../hooks/useProducts', async () => {
    const actual = await vi.importActual<typeof import('../../hooks/useProducts')>('../../hooks/useProducts');
    return {
        ...actual,
        useProducts: vi.fn(),
    };
});

vi.mock('../../utils/products/productTableColumns', () => ({
    columns: vi.fn(() => [
        { field: 'name', headerName: 'Nombre', flex: 2, sortable: false },
        { field: 'storeName', headerName: 'Tienda', flex: 1, sortable: false },
        {
            field: 'normalPrice',
            headerName: 'Precio normal',
            flex: 1,
            sortable: false,
            valueFormatter: (_: any, row: any) =>
                row.normalPrice ? `$${row.normalPrice.toFixed(2)}` : 'N/A',
        },
        {
            field: 'offerPrice',
            headerName: 'Precio de oferta',
            flex: 1,
            sortable: false,
            valueFormatter: (_: any, row: any) =>
                row.offerPrice ? `$${row.offerPrice.toFixed(2)}` : 'N/A',
        },
        {
            field: 'lowest',
            headerName: 'Precio más bajo',
            flex: 1,
            sortable: false,
            valueFormatter: (_: any, row: any) =>
                row.lowest ? `$${row.lowest.toFixed(2)}` : 'N/A',
        },
        {
            field: 'discount',
            headerName: 'Descuento',
            flex: 1,
            sortable: false,
            valueGetter: (_: any, row: any) => {
                const normal = row.normalPrice;
                const lowest = row.lowest;
                if (!normal || !lowest) return 'N/A';
                const discount = ((normal - lowest) / normal) * 100;
                return `${discount.toFixed(2)}%`;
            },
        },
    ]),
}));

describe('<ProductTable />', () => {
    const renderComponent = () =>
        render(
            <I18nextProvider i18n={i18n}>
                <ProductTable />
            </I18nextProvider>
        );

    beforeEach(async () => {
        vi.clearAllMocks();

        const mod = await import('../../hooks/useProducts');
        useProducts = mod.useProducts as Mock;
    });

    it('should display the table headers in Spanish', () => {
        useProducts.mockReturnValue({
            data: { products: [], paging: { total: 100 } },
            isLoading: false,
            error: null,
            isError: false,
        });

        renderComponent();
        expect(screen.getByText('Nombre')).toBeInTheDocument();
        expect(screen.getByText('Precio normal')).toBeInTheDocument();
    });

    it('should display an error message if there is an error in the data', () => {
        useProducts.mockReturnValue({
            data: null,
            isLoading: false,
            error: { message: 'Error loading products' },
            isError: true,
        });

        renderComponent();
        expect(screen.getByText(/Error loading products/i)).toBeInTheDocument();
    });
});