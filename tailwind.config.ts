import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        card: '#0f0f10',
        accent: '#D4AF37',
        textSoft: '#d1d5db'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(212,175,55,0.15)'
      }
    }
  },
  plugins: []
};

export default config;
