module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Lato', 'helvetica', 'arial', 'sans-serif'],
      serif: ['Prata', 'serif'],
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
