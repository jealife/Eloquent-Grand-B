/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                "accent-muted": "var(--accent-muted)",
                surface: "var(--surface)",
                "text-muted": "var(--text-muted)",
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
