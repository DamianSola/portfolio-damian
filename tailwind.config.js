/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F6F7',
        surface: '#FFFFFF',
        'surface-hover': '#FAFAFA',
        primary: '#2E2E2E',
        secondary: '#34495E',
        muted: '#5D6D7E',
        accent: '#E67E22',
        'accent-hover': '#CF6D17',
        complementary: '#A97458',
        line: 'rgba(52, 73, 94, 0.12)',
        'accent-dim': 'rgba(230, 126, 34, 0.1)',
        'complementary-dim': 'rgba(169, 116, 88, 0.12)',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(52, 73, 94, 0.08), 0 4px 16px rgba(52, 73, 94, 0.06)',
        'card-hover': '0 4px 20px rgba(52, 73, 94, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
