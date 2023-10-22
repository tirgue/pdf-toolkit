import type { Meta, StoryObj } from "@storybook/react";

import { PDFDocument } from "pdf-lib";
import { v4 as uuidv4 } from "uuid";
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
                id: uuidv4(),
                name: "mypdf0.pdf",
                document: {} as PDFDocument,
            },
            {
                id: uuidv4(),
                name: "mypdfveryveryveryveryverylongpdfname1.pdf",
                document: {} as PDFDocument,
            },
            {
                id: uuidv4(),
                name: "mypdf2.pdf",
                document: {} as PDFDocument,
            },
        ],
        onRemovePDF: (index) => console.log("Removing", index),
    },
};
