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

    it('should render the title "Filters"', () => {
        expect(screen.getByText('Filtros')).toBeInTheDocument();
    });

    it('should render the state selector with the label "State"', () => {
        expect(screen.getByLabelText('Estado')).toBeInTheDocument();
    });

    it('should render the brand selector with the label "Brand"', () => {
        expect(screen.getByLabelText('Marca')).toBeInTheDocument();
    });

    it('should apply styles to the title "Filters"', () => {
        const titleElement = screen.getByText('Filtros');
        expect(titleElement).toHaveStyle('margin-bottom: 16px');
    });
});