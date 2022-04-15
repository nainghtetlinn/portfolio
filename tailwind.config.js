module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        highlight: {
          DEFAULT: 'var(--violet)',
          dark: 'var(--green)',
        },
      },
      textColor: {
        dark: {
          primary: 'var(--green)',
          secondary: 'var(--lightest-slate)',
          accent: 'var(--slate)',
        },
        skin: {
          primary: 'var(--violet)',
          secondary: 'var(--brown)',
          accent: 'var(--lightest-brown)',
        },
      },
      backgroundColor: {
        dark: {
          primary: 'var(--navy)',
          secondary: 'var(--light-navy)',
          accent: 'var(--lightest-navy)',
          highlight: 'var(--green)',
        },
        skin: {
          primary: 'var(--white)',
          secondary: 'var(--lightest-violet)',
          accent: 'var(--light-violet)',
          highlight: 'var(--violet)',
        },
      },
      backgroundSize: {
        300: '300%',
      },
      transitionProperty: {
        card: 'transform, opacity shadow',
      },

      animation: {
        text: 'text 5s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        marqueeRev: 'marquee 20s linear infinite reverse',
      },
      keyframes: {
        text: {
          '0%,100%': {
            backgroundPosition: 'left',
          },
          '50%': {
            backgroundPosition: 'right',
          },
        },
        marquee: {
          '0%': { left: 0 },
          '100%': { left: '-100%' },
        },
      },
    },
  },
  plugins: [],
};
