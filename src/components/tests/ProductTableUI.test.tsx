// ProductTableUI.test.js
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { vi } from 'vitest';
import ProductTableUI from '../products/ProductTableUI';

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

    it('debería renderizar la tabla cuando no hay errores', () => {
        renderComponent();
        expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('debería renderizar el mensaje de error si isError es true', () => {
        renderComponent({
            isError: true,
            error: { message: 'Error cargando los datos' },
        });
        expect(screen.getByText(/Error cargando los datos/i)).toBeInTheDocument();
    });

    it('debería renderizar un mensaje por defecto si error no tiene message', () => {
        renderComponent({
            isError: true,
            error: null,
        });
        expect(screen.getByText(/An unexpected error occurred/i)).toBeInTheDocument();
    });

    it('debería renderizar las columnas correctamente', () => {
        renderComponent({
            rows: [{ id: 1 }],
            columns: [{ field: 'id', headerName: 'ID', width: 100 }],
        });
        expect(screen.getByText('ID')).toBeInTheDocument();
    });
});