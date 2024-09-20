/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Kumbh Sans, sans-serif',
    },
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(25, 100%, 94%)',
        neutral: {
          DEFAULT: 'hsl(220, 13%, 13%)',
          100: 'hsl(219, 9%, 45%)',
          200: 'hsl(220, 14%, 75%)',
          300: 'hsl(223, 64%, 98%)',
        },
      },
    },
  },
  plugins: [],
};

// ### Primary

// - Orange: hsl(26, 100%, 55%)
// - Pale orange: hsl(25, 100%, 94%)

// ### Neutral

// - Very dark blue: hsl(220, 13%, 13%)
// - Dark grayish blue: hsl(219, 9%, 45%)
// - Grayish blue: hsl(220, 14%, 75%)
// - Light grayish blue: hsl(223, 64%, 98%)
