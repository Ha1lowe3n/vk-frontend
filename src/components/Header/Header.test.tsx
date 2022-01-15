import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";

it("render header component", () => {
    render(<Header />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByAltText("profile avatar")).toBeInTheDocument();
    expect(screen.getByAltText("catalog icon")).toBeInTheDocument();
});

it("Header snapshot", () => {
    const view = render(<Header />);
    expect(view).toMatchSnapshot();
});

describe("events", () => {
    it("music player button click", () => {
        const togglePlay = jest.fn();
        render(<Header />);
        const btn = screen.getByTestId("MusicPlayerPlayIcon");
        btn.onclick = togglePlay;
        expect(btn).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId("MusicPlayerPauseIcon")).toBeInTheDocument();
        expect(togglePlay).toBeCalledTimes(1);
    });
});
