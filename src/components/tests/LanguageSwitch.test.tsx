import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSwitch } from "../shared/LanguageSwitch";

describe('<LanguageSwitch />', () => {

    it("should render correctly and toggles language", () => {
        render(<LanguageSwitch />);

        const text = screen.getByText(/español/i);
        expect(text).toBeInTheDocument();
        const flag = screen.getByAltText(/country flag/i);
        expect(flag).toBeInTheDocument();
        expect(flag).toHaveAttribute("src", expect.stringContaining("argFlag.png"));
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
        expect(switchButton).toBeChecked();
        fireEvent.click(switchButton);
        expect(switchButton).not.toBeChecked();
        const text2 = screen.getByText(/English/i);
        expect(text2).toBeInTheDocument();
        const flag2 = screen.getByAltText(/country flag/i);
        expect(flag2).toBeInTheDocument();
        expect(flag2).toHaveAttribute("src", expect.stringContaining("usaFlag.png"));

    })
})