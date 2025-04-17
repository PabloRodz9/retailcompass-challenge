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
    const renderComponent = () =>
        render(
            <I18nextProvider i18n={i18n}>
                <Sidebar />
            </I18nextProvider>
        );

    beforeEach(() => {
        renderComponent();
    });

    it('debería renderizar el título "Filtros"', () => {
        expect(screen.getByText('Filtros')).toBeInTheDocument();
    });

    it('debería renderizar el selector de estado con la etiqueta "Estado"', () => {
        expect(screen.getByLabelText('Estado')).toBeInTheDocument();
    });

    it('debería renderizar el selector de marca con la etiqueta "Marca"', () => {
        expect(screen.getByLabelText('Marca')).toBeInTheDocument();
    });

    it('debería aplicar estilos al título "Filtros"', () => {
        const titleElement = screen.getByText('Filtros');
        expect(titleElement).toHaveStyle('margin-bottom: 16px');
    });
});