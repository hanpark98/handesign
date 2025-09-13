/**** Tailwind Config ****/
/** Scans Astro/JS/TS/MD/MDX for classes **/
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        text: '#ececec',
        soft: '#bdbdbd',
        card: '#111111',
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.45)' },
      maxWidth: { 'wrap': '1128px' },
    },
  },
  plugins: [],
}
