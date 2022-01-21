import { fireEvent, render, screen } from "@testing-library/react";
import { Track, TrackProps } from "./Track";

let props: TrackProps;

beforeEach(() => {
    props = {
        titleTrack: "titleTrack",
        titleGroup: "titleGroup",
        urlImg: "https://i.imgur.com/FDvVliP.jpg",
        currentTrack: false,
        number: 1,
        currentPlay: 0,
        changeCurrentPlay: jest.fn(),
        changeCurrentTrack: jest.fn(),
    };
});

it("render Track component", () => {
    render(<Track {...props} />);
    expect(screen.getByText("titleTrack")).toBeInTheDocument();
    expect(screen.getByText("titleGroup")).toBeInTheDocument();
});

it("Track snapshot", () => {
    const view = render(<Track {...props} />);
    expect(view).toMatchSnapshot();
});

describe("events", () => {
    it("mouse enter and leave", () => {
        const onMouseEnter = jest.fn();
        const onMouseLeave = jest.fn();
        render(<Track {...props} />);
        const track = screen.getByTestId("track");

        expect(track).toBeInTheDocument();
        track.onmouseenter = onMouseEnter;
        track.onmouseleave = onMouseLeave;

        fireEvent.mouseEnter(track);
        expect(onMouseEnter).toBeCalledTimes(1);
        fireEvent.mouseLeave(track);
        expect(onMouseLeave).toBeCalledTimes(1);
    });
});
