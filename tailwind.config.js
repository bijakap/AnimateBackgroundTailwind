module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        test: 'test 7s infinite ease-out',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'test': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-80vh)',
          },
        },
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
