import type { Meta, StoryObj } from "@storybook/react";

import { PDFDocument } from "pdf-lib";
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
                name: "mypdf0.pdf",
                document: {} as PDFDocument,
            },
            {
                name: "mypdfveryveryveryveryverylongpdfname1.pdf",
                document: {} as PDFDocument,
            },
            {
                name: "mypdf2.pdf",
                document: {} as PDFDocument,
            },
        ],
        onRemovePDF: (index) => console.log("Removing", index),
    },
};
