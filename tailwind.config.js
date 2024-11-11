/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fan-green': '#22c55e',
        'fan-light': '#dcfce7',
        'light-orange': '#f97316',
        'light-orange-light': '#ffedd5',
        'refr-yellow': '#eab308',
        'refr-yellow-light': '#fef9c3',
        'ac-purple': '#a855f7',
        'ac-purple-light': '#f3e8ff',
        'chart-blue': '#3b82f6',
        'chart-light-blue': '#93c5fd',
        'usage-purple': '#6366f1',
        'bar-cyan': '#06b6d4'
      }
    },
  },
  plugins: [],
}