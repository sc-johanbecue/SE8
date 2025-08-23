// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // If classes can appear in a lib:
    // './node_modules/@sitecore-content-sdk/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // pattern-based
    {
      // allow layout/positioning with suffixes: flex-row, flex-col, gap-*, basis-*, order-*
      pattern:
        /^(?:basis-|order-|flex-|inline-|block|hidden|table|static|fixed|relative|absolute|gap-).*/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      // all margin shorthands: m-, mt-, mr-, mb-, ml-, mx-, my-
      pattern: /^m[trblxy]?-.*/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-color-1': 'var(--tw-primary-color-1)',
        'primary-color-2': 'var(--tw-primary-color-2)',
        'primary-color-3': 'var(--tw-primary-color-3)',
        // Secondary
        'secondary-color-1': 'var(--tw-secondary-color-1)',
        'secondary-color-2': 'var(--tw-secondary-color-2)',
        'secondary-color-3': 'var(--tw-secondary-color-3)',
        'secondary-color-4': 'var(--tw-secondary-color-4)',
        // Neutral
        'neutral-color-black': 'var(--tw-black)',
        'neutral-color-white': 'var(--tw-white)',
        'neutral-color-dark-gray': 'var(--tw-dark-gray)',
        'neutral-color-mid-tone-gray': 'var(--tw-mid-tone-gray)',
        'neutral-color-light-gray': 'var(--tw-light-gray)',
        'neutral-color-very-light-gray': 'var(--tw-very-light-gray)',
        'neutral-color-ultra-light-gray': 'var(--tw-ultra-light-gray)',
        'neutral-color-near-white-gray': 'var(--tw-near-white-gray)',
      },
    },
  },
  // plugins: [require('@tailwindcss/aspect-ratio')],
};

export default config;
