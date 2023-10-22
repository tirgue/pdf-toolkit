import type { Meta, StoryObj } from "@storybook/react";

import { PDFDocument } from "pdf-lib";
import { PDFOpener } from "./PDFOpener";

const meta = {
    title: "PDFOpener",
    component: PDFOpener,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof PDFOpener>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
