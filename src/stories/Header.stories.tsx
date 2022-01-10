import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.scss";

import { Header } from "../components/Header/Header";

export default {
    title: "Project/Header",
    component: Header,
    argTypes: {
        onClick: { action: "clicked" },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderComp = Template.bind({});
HeaderComp.args = {};
