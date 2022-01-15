import { render, screen } from "@testing-library/react";
import { MusicPlayer, MusicPlayerPropsType } from "./MusicPlayer";

let props: MusicPlayerPropsType;

beforeEach(() => {
    props = {
        play: false,
        trackTitle: "hello",
        togglePlay: () => jest.fn(),
    };
});

it("render header component", () => {
    render(<MusicPlayer {...props} />);
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
    // expect(screen.getByRole("banner")).toBeInTheDocument();
    // expect(screen.getByAltText("profile avatar")).toBeInTheDocument();
    // expect(screen.getByAltText("catalog icon")).toBeInTheDocument();
});

it("Header snapshot with play false", () => {
    const view = render(<MusicPlayer {...props} />);
    expect(view).toMatchSnapshot();
});

it("Header snapshot with play true", () => {
    const view = render(<MusicPlayer {...props} play={true} />);
    expect(view).toMatchSnapshot();
});
