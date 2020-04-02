/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      untilLg: { max: '1023px' },
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primary: {
          100: '#FFEFEF',
          200: '#FFD7D7',
          300: '#FFBFBF',
          400: '#FF8F8F',
          500: '#FF5F5F',
          600: '#E65656',
          700: '#993939',
          800: '#732B2B',
          900: '#4D1D1D'
        },
        dark: '#363636'
      }
    }
  },
  variants: {},
  plugins: []
}
