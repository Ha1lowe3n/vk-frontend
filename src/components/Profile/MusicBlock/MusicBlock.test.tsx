import { fireEvent, render, screen } from "@testing-library/react";
import { MusicBlock } from "./MusicBlock";

it("render MusicBlock component", () => {
    render(<MusicBlock />);
    expect(screen.getByText("Music")).toBeInTheDocument();
    expect(screen.getByText("980")).toBeInTheDocument();
    expect(screen.getAllByTestId("track")).toHaveLength(3);
});

it("MusicBlock snapshot", () => {
    const view = render(<MusicBlock />);
    expect(view).toMatchSnapshot();
});

describe("events", () => {
    it("change current track", () => {
        const changeCurrentTrack = jest.fn();
        render(<MusicBlock />);
        const track = screen.getAllByTestId("track")[0];

        expect(track).toBeInTheDocument();
        track.onclick = changeCurrentTrack;
        fireEvent.click(track);
        expect(changeCurrentTrack).toBeCalledTimes(1);
    });

    it("change current play", () => {
        const changeCurrentPlay = jest.fn();
        render(<MusicBlock />);
        const track = screen.getAllByTestId("track")[0];

        expect(track).toBeInTheDocument();
        track.onclick = changeCurrentPlay;

        fireEvent.click(track);
        expect(changeCurrentPlay).toBeCalledTimes(1);

        fireEvent.click(track);
        expect(changeCurrentPlay).toBeCalledTimes(2);
    });
});
