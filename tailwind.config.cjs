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
        //24px
        // "clamp(1.5rem, 1rem + 0.56vw, 1.875rem)",
        '1.5rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        },
      ],
      xl: [
        //36px
        '2.25rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        },
      ],
      '2xl': [
        //48
        '3rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        },
      ],
      '3xl': [
        //64
        '4rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '112%',
          fontWeight: 600,
        },
      ],
      '4xl': [
        //76
        '4.75rem',
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
