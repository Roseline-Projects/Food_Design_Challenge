// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-green': '#216530',
          'medium-green': '#7AA950',
          'orange': '#ED8530',
          'light-yellow': '#FFD390',
          'cream': '#F8F1E1',
        },
        fontFamily: {
          'nunito': ['Nunito', 'sans-serif'],
          'sans': ['Nunito', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  