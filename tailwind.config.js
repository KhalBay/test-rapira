module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                gilroy: ['Gilroy', 'sans-serif'],
            },
            fontWeight: {
                light: 300,
                extrabold: 800,
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}