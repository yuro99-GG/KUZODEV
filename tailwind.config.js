/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          deep: '#070A12',
          navy: '#0B1020',
          elevated: '#10172A',
        },
        text: {
          primary: '#F4F7FF',
          secondary: '#AAB4C8',
          muted: '#6F7B93',
        },
        accent: {
          blue: '#4A7DFF',
          violet: '#8D72FF',
          cyan: '#74DDF2',
          gold: '#E6B96C',
          peach: '#FF9E7A',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Geist"', 'system-ui', 'sans-serif'],
        sans: ['"Geist"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"SFMono-Regular"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(74, 125, 255, 0.16)',
        card: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
