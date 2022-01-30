module.exports = {
  mode: 'jit',
  prefix: "",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'ashu': ['10rem', { lineHeight: '10rem' }]
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}
