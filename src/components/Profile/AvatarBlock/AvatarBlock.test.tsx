import { render, screen } from "@testing-library/react";
import { AvatarBlock } from "./AvatarBlock";

it("render AvatarBlock component", () => {
    render(<AvatarBlock />);
    expect(screen.getByText("Page statistics")).toBeInTheDocument();
    expect(screen.getByText("Memories")).toBeInTheDocument();
    expect(screen.getByText("Story archive")).toBeInTheDocument();
    expect(screen.getByText("Money transfers")).toBeInTheDocument();

    expect(screen.getByText("Edit")).toBeInTheDocument();

    expect(screen.getByAltText("avatar")).toBeInTheDocument();
});

it("AvatarBlock snapshot", () => {
    const view = render(<AvatarBlock />);
    expect(view).toMatchSnapshot();
});
