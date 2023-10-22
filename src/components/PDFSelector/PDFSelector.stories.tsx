import type { Meta, StoryObj } from "@storybook/react";

import { PDFSelector } from "./PDFSelector";

const meta = {
    title: "PDFSelector",
    component: PDFSelector,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof PDFSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pdfs: [
            {
                index: 0,
                name: "mypdf0.pdf",
            },
            {
                index: 1,
                name: "mypdfverylongpdfname1.pdf",
            },
            {
                index: 2,
                name: "mypdf2.pdf",
            },
        ],
    },
};
