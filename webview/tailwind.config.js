/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '../src/plugins/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-blue': 'linear-gradient(180deg, #1D457F 0%, #6F94C4 100%)',
            },
            animation: {
                fadein: 'fadeIn .5s ease-in-out',
                fadeout: 'fadeOut .5s ease-in-out',
                marquee: 'marquee 10s linear infinite',
            },
            colors: {
                ctm_mainbg: '#1a1a1a',
                ctm_bg_light: '#114b3c',
                ctm_text1: '#28ba7f',
                color_dark: '#201E1F',
                color_secondary: '#222831',
                color_tertiary: '#434242',
                color_primary: '#11D4DD',
                color_white: '#FFFFFF',
                color_danger: '#DA373C',
                color_success: '#1AB754',
                color_alert: '#DBB724',
                primary: '#131424',
                secondary: '#393A47',
                accent: '#F13024',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                Kanit: ['Kanit', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
