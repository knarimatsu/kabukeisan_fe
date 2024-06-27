import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
    title: "Buttons/ToggleSwitch",
    component: ToggleSwitch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isFirstLabel: { control: "boolean" },
        firstLabel: { control: "text" },
        secondLabel: { control: "text" },
        changeState: { control: "function" },
    },
    args: {
        isFirstLabel: true,
        firstLabel: "First",
        secondLabel: "Second",
        changeState: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;
export const Index: Story = {
    args: {
        isFirstLabel: true,
        firstLabel: "First",
        secondLabel: "Second",
        changeState: fn(),
    },
};
