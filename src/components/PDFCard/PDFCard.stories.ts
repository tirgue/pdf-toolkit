import type { Meta, StoryObj } from "@storybook/react";

import { PDFCard } from "./PDFCard";

const meta = {
    title: "PDFCard",
    component: PDFCard,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof PDFCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        index: 0,
        name: "mypdf.pdf",
    },
};
