import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        spectral: ['var(--font-spectral)'],
      },
      animation: {
        animeLeft: 'animeLeft 0.3s forwards',
        scaleUp: 'scaleUp 0.3s forwards',
      },
      keyframes: {
        animeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'initial',
          },
        },
        scaleUp: {
          to: {
            opacity: 'initial',
            transform: 'initial',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
