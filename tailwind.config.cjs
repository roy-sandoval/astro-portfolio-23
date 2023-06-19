/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      fontSize: {
         sm: [
            //14px
            '0.75rem',
            {
               lineHeight: '1.2',
            },
         ],
         base: [
            //16px
            '1rem',
            {
               lineHeight: '1.2',
               letterSpacing: '-0.02em',
            },
         ],
         lg: [
            //16px, 24px, vw
            'clamp(1rem, 0.5vw + 1rem, 36px)',
            {
               lineHeight: '1.2',
               letterSpacing: '-0.02em',
            },
         ],
         xl: [
            //24px, 36px, vw
            'clamp(1.5rem, calc(1.2vw + 1rem), 4.75vw)',
            {
               lineHeight: '1.2',
               letterSpacing: '-0.02em',
            },
         ],
         '2xl': [
            //32, 48, vw
            'clamp(2rem, calc(1.8vw + 1rem), 4.75vw)',
            {
               lineHeight: '1.2',
               letterSpacing: '-0.02em',
            },
         ],
         '3xl': [
            //38, 64, vw
            'clamp(2.38rem, calc(2vw + 2rem), 4.75vw)',
            {
               letterSpacing: '-0.02em',
               lineHeight: '112%',
               fontWeight: 600,
            },
         ],
         '4xl': [
            'clamp(3rem, calc(2vw + 2.5rem), 4.75vw)',
            {
               letterSpacing: '-0.02em',
               fontWeight: 700,
               lineHeight: '120%',
            },
         ],
      },
      extend: {
         colors: {
            brand: {
               light: '#faf9f5',
               white: '#ffffff',
               gray: {
                  lighter: '#f2f2f2',
                  light: '#e8e8e8',
                  medium: '#b5b5b5',
                  dark: '#696969',
               },
               black: '#021504',
               primary: '#077038',
            },
            warning: '#FA7C28',
            error: '#E73232',
         },
      },
   },
   plugins: [],
};
