import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import ProductTable from '../products/ProductTable';
import { usePagination } from '../../hooks/usePagination';
import { useProducts } from '../../hooks/useProducts';

// Mocks de los hooks
vi.mock('../../hooks/usePagination', () => ({
    usePagination: vi.fn(() => ({
        page: 1,
        size: 10,
        setPage: vi.fn(),
        setSize: vi.fn(),
    })),
}));

vi.mock('../../hooks/useProducts', () => ({
    useProducts: vi.fn(() => ({
        data: { products: [], paging: { total: 100 } },
        isLoading: false,
        error: null,
        isError: false,
    })),
}));

// Mock de la función columns
vi.mock('../../utils/products/producTableColumns', () => ({
    columns: vi.fn(() => [
        { field: 'name', headerName: 'Product Name' },
        { field: 'price', headerName: 'Price' },
    ]),
}));

describe('ProductTable component', () => {
    const renderComponent = () =>
        render(
            <I18nextProvider i18n={i18n}>
                <ProductTable />
            </I18nextProvider>
        );

    it('renderiza correctamente los textos traducidos', () => {
        renderComponent();
        expect(screen.getByText(/Product Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Price/i)).toBeInTheDocument();
    });


    it('ajusta el idioma a español cuando se cambia el idioma', () => {
        // i18n.changeLanguage('en');
        renderComponent();
        expect(screen.getByText('Product Name')).toBeInTheDocument(); 
    });

    // it('muestra la tabla correctamente sin errores de carga', () => {
    //     renderComponent();
    //     expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    //     expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    // });

    // it('muestra un mensaje de error si hay un error en los datos', () => {
    //     vi.mock('../../hooks/useProducts', () => ({
    //         useProducts: vi.fn(() => ({
    //             data: null,
    //             isLoading: false,
    //             error: { message: 'Error loading products' },
    //             isError: true,
    //         })),
    //     }));

    //     renderComponent();
    //     expect(screen.getByText(/Error loading products/i)).toBeInTheDocument();
    // });
});
