const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "7xl": { max: "1400px" },
            "6xl": { max: "1320px" },
            "5xl": { max: "1090px" },
            "4xl": { max: "992px" },
            "3xl": { max: "830px" },
            "2xl": { max: "768px" },
            "1xl": { max: "500px" },
            "bm": { max: "620px" },
        },
        extend: {
            backgroundImage: {
                'gradient-mask-t': 'linear-gradient(0deg, transparent, #04080c)',
                'gradient-mask-l-dark': 'linear-gradient(0deg, transparent, #ffffff)',
            },
            maskImage: {
                'gradient-mask-t': 'linear-gradient(180deg, #04080c 24%, transparent)',
                'gradient-mask-l-dark': 'linear-gradient(180deg, #ffffff 24%, transparent)',
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ['dark'],
            maskImage: ['dark'],
        },
    },
    plugins: [],
    darkMode: "class",
};

export default config;