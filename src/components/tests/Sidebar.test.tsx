import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Sidebar from '../products/Sidebar';

vi.mock('../../stores/useFilterStore', () => ({
    useFilterStore: vi.fn(() => ({
        brand: '',
        setBrand: vi.fn(),
        status: '',
        setStatus: vi.fn(),
    })),
}));

describe('<Sidebar />', () => {
    beforeEach(() => {
        render(
            <I18nextProvider i18n={i18n}>
                <Sidebar />
            </I18nextProvider>
        );
    });

    test('renderiza el título "Filtros"', () => {
        expect(screen.getByText('Filtros')).toBeInTheDocument();
    });

    test('renderiza el selector de estado con la etiqueta "Estado"', () => {
        expect(screen.getByLabelText('Estado')).toBeInTheDocument();
    });

    test('renderiza el selector de marca con la etiqueta "Marca"', () => {
        expect(screen.getByLabelText('Marca')).toBeInTheDocument();
    });


    test('aplica estilos al título "Filtros"', () => {
        const titleElement = screen.getByText('Filtros');
        expect(titleElement).toHaveStyle('margin-bottom: 16px');
    });

});