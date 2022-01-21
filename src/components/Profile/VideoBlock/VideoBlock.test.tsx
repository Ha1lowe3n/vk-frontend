import { fireEvent, render, screen } from "@testing-library/react";
import { VideoBlock } from "./VideoBlock";

it("render VideoBlock component", () => {
    render(<VideoBlock />);
    expect(screen.getByText("Videos")).toBeInTheDocument();
    expect(screen.getByText("208")).toBeInTheDocument();
});

it("VideoBlock snapshot", () => {
    const view = render(<VideoBlock />);
    expect(view).toMatchSnapshot();
});
