import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "yellow-primary": "var(--yellow-primary)",
                "red-primary": "var(--red-primary)",
            },
        },
    },
    plugins: [],
} satisfies Config;
