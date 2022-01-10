import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.scss";
import { action } from "@storybook/addon-actions";

import { MusicPlayer } from "../components/Header/MusicPlayer/MusicPlayer";

export default {
    title: "Project/MusicPlayer",
    component: MusicPlayer,
} as ComponentMeta<typeof MusicPlayer>;

const Template: ComponentStory<typeof MusicPlayer> = (args) => (
    <MusicPlayer {...args} />
);

export const MusicPlayerActive = Template.bind({});
MusicPlayerActive.args = {
    play: true,
    trackTitle: "hello",
    togglePlay: action("toggle play"),
};
