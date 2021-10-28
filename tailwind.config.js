module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        test: 'test 7s infinite ease-out',
        wiggle: 'wiggle 10s infinite ease-in-out',
      },
      keyframes: {
        'wiggle': {
          '0%': {
            width : 'calc(100% + 1.3px)',
          },
          '50%': {
            width : 'calc(150% + 1.3px)',
          },
          '100%': {
            width : 'calc(100% + 1.3px)',
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
