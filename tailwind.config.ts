import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors(theme) {
        return {
          ...theme.colors,
          primary: {
            ...theme.colors.purple,
            DEFAULT: theme.colors.purple['500'],
          },
        };
      },
    },
  },
  plugins: [],
};
export default config;
