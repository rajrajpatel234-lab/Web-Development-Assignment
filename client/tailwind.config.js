/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0e27',
          light: '#1a1f3a',
          dark: '#060920',
        },
        secondary: {
          DEFAULT: '#1e2442',
          light: '#2a3154',
          dark: '#151933',
        },
        accent: {
          blue: '#4d7cff',
          purple: '#7c3aed',
          cyan: '#00d4ff',
          green: '#10b981',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a8b3cf',
          muted: '#6b7280',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(255, 255, 255, 0.05)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4d7cff 0%, #7c3aed 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00d4ff 0%, #4d7cff 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(77, 124, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(77, 124, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
