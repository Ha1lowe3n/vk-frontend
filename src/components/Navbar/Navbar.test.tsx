import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

it("render Navbar component", () => {
    render(<Navbar />);
    expect(screen.getByText("My profile")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Messages")).toBeInTheDocument();
    expect(screen.getByText("Calls")).toBeInTheDocument();
    expect(screen.getByText("Friends")).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();
});

it("Navbar snapshot", () => {
    const view = render(<Navbar />);
    expect(view).toMatchSnapshot();
});
