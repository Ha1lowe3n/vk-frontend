import { render, screen } from "@testing-library/react";
import { GiftsBlock } from "./GiftsBlock";

it("render header component", () => {
    render(<GiftsBlock />);
    expect(screen.getByText("Gifts")).toBeInTheDocument();
    expect(screen.getByText("105")).toBeInTheDocument();
});

it("Header snapshot", () => {
    const view = render(<GiftsBlock />);
    expect(view).toMatchSnapshot();
});
