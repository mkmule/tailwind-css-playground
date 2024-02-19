import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors(theme) {
        return {
          ...theme.colors,
          'blue-chill': {
            '50': '#f2f9f9',
            '100': '#ddeff0',
            '200': '#bfe0e2',
            '300': '#92cace',
            '400': '#5faab1',
            '500': '#438e96',
            '600': '#3b757f',
            '700': '#356169',
            '800': '#325158',
            '900': '#2d464c',
            '950': '#1a2c32',
          },
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
