module.exports = {
  purge: [
      './storage/framework/views/*.php',
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Roboto', 'ui-sans-serif', 'system-ui']
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
