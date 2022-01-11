import { render, screen } from "@testing-library/react";
import { GroupsBlock } from "./GroupsBlock";

it("render GiftsBlock component", () => {
    render(<GroupsBlock />);
    expect(screen.getByText("Following")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
    expect(screen.getAllByAltText("group avatar")[0]).toBeInTheDocument();
});

it("GiftsBlock snapshot", () => {
    const view = render(<GroupsBlock />);
    expect(view).toMatchSnapshot();
});
