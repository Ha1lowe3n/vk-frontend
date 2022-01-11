import { render, screen } from "@testing-library/react";
import { FriendsBlock } from "./FriendsBlock";

it("render FriendsBlock component", () => {
    render(<FriendsBlock />);
    expect(screen.getAllByAltText("person avatar")[0]).toBeInTheDocument();
    expect(screen.getByText("Friends")).toBeInTheDocument();
    expect(screen.getByText("Friends online")).toBeInTheDocument();
});

it("FriendsBlock snapshot", () => {
    const view = render(<FriendsBlock />);
    expect(view).toMatchSnapshot();
});
