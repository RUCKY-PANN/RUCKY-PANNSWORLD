/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layouts/**/*.astro',
    './pages/**/*.{astro,html,js,ts}',
    './components/**/*.{astro,html,js,ts}',
    './src/layouts/**/*.{astro}',
  ],
  theme: {
    extend: {
      colors: {
        pannblue: '#143a8e',
        pannhover: '#0000ff63',
        pannhighlight: '#0000ffff',
      },
      fontSize: {
        base: '16px',
        sub: '12px',
      },
      borderRadius: {
        lg: '0.75rem',
      },
      animation: {
        bounceY: 'bounceY 1.5s infinite ease-in-out',
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
