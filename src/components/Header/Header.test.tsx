import { render, screen } from "@testing-library/react";
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
