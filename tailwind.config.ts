import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          subtle: 'var(--color-bg-subtle)',
          surface: 'var(--color-bg-surface)',
        },
        border: 'var(--color-border)',
        'border-orange': 'var(--color-border-orange)',
        text: {
          DEFAULT: 'var(--color-text)',
          subtle: 'var(--color-text-subtle)',
        },
        accent: {
          orange: 'var(--color-accent-orange)',
          green: 'var(--color-accent-green)',
          blue: 'var(--color-accent-blue)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'PingFang SC', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-title': 'linear-gradient(90deg, var(--color-accent-green), var(--color-accent-blue))',
        'glass': 'var(--glass-bg)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.35)',
        'glow-green': '0 0 30px rgba(46, 230, 168, 0.35)',
        'glow-green-sm': '0 0 16px rgba(46, 230, 168, 0.25)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(46, 230, 168, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(46, 230, 168, 0.6)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 2.4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
