/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,md,mdx,ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '16px' },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'ui-sans-serif', 'system-ui', 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        bg: '#0a0a0a',
        fg: '#f5f5f5',
        mute: '#9ca3af'
      }
    }
  },
  plugins: []
};
