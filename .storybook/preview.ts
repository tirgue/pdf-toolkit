import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "Grey",
            values: [
                {
                    name: "White",
                    value: "#fff",
                },
                {
                    name: "Grey",
                    value: "#aaa",
                },
                {
                    name: "Black",
                    value: "#000",
                },
            ],
        },
    },
};

export default preview;
