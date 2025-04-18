import { prettyDOM, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { vi } from 'vitest';
import ProductTableUI from '../products/ProductTableUI';
import { customLocaleText } from '../../utils/products/products.utils';

describe('<ProductTableUI />', () => {
    const defaultProps = {
        rows: [],
        columns: [{ field: 'id', headerName: 'ID', width: 100 }],
        loading: false,
        rowCount: 0,
        page: 0,
        size: 10,
        onPageChange: vi.fn(),
        localeText: {},
        error: null,
        isError: false,
    };

    const renderComponent = (customProps = {}) => {
        return render(
            <I18nextProvider i18n={i18n}>
                <ProductTableUI {...defaultProps} {...customProps} />
            </I18nextProvider>
        );
    };

    it('should render the table when there are no errors', () => {
        renderComponent();
        expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('should render the empty message when rows are empty', () => {
        renderComponent({
            rows: [],
            columns: [], 
            loading: false,
            rowCount: 0,
            page: 0,
            size: 5,
            onPageChange: vi.fn(),
            localeText: customLocaleText,
            error: null,
            isError: false,
        });

        expect(screen.getByText('No se encontraron productos')).toBeInTheDocument();
    });


    it('should render the error message if isError is true', () => {
        renderComponent({
            isError: true,
            error: { message: 'Error cargando los datos' },
        });
        expect(screen.getByText(/Error cargando los datos/i)).toBeInTheDocument();
    });

    it('should render a default message if error has no message', () => {
        renderComponent({
            isError: true,
            error: null,
        });
        expect(screen.getByText(/An unexpected error occurred/i)).toBeInTheDocument();
    });

    it('should render the columns correctly', () => {
        renderComponent({
            rows: [{ id: 1 }],
            columns: [{ field: 'id', headerName: 'ID', width: 100 }],
        });
        expect(screen.getByText('ID')).toBeInTheDocument();
    });
});