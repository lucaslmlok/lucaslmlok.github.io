module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                '"Inter"',
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
            ],
        },
    },
    plugins: [],
};
