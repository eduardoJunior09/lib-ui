import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "Texto",
      description: "Texto exibido dentro do botão.",
      control: { type: "text" },
    },
    variant: {
      name: "Variante",
      description: "Define o estilo visual do botão.",
      options: ["default", "outline"],
      control: { type: "select" },
    },
    size: {
      name: "Tamanho",
      description: "Define o tamanho do botão.",
      options: ["default", "sm", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Default",
    variant: "default",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline",
    variant: "outline",
    size: "sm",
  },
};

export const Lg: Story = {
  args: {
    label: "Default",
    variant: "default",
    size: "lg",
  },
};
