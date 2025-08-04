// File was added by SolutionEngineering
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Text sizes
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',

    // Margin utility classes (non-responsive + responsive variants)
    'ml-0',
    'mr-0',
    'mx-0',
    'ml-auto',
    'mr-auto',
    'mx-auto',
    'sm:ml-0',
    'sm:mr-0',
    'sm:mx-0',
    'sm:ml-auto',
    'sm:mr-auto',
    'sm:mx-auto',
    'md:ml-0',
    'md:mr-0',
    'md:mx-0',
    'md:ml-auto',
    'md:mr-auto',
    'md:mx-auto',
    'lg:ml-0',
    'lg:mr-0',
    'lg:mx-0',
    'lg:ml-auto',
    'lg:mr-auto',
    'lg:mx-auto',
    'xl:ml-0',
    'xl:mr-0',
    'xl:mx-0',
    'xl:ml-auto',
    'xl:mr-auto',
    'xl:mx-auto',
    '2xl:ml-0',
    '2xl:mr-0',
    '2xl:mx-0',
    '2xl:ml-auto',
    '2xl:mr-auto',
    '2xl:mx-auto',
    'w-full',
    'basis-full',
    'basis-0',
    'grow',
    // Layout and positioning utilities
    {
      pattern: /^(basis-|order-|flex|block|hidden|inline|table|static|fixed|relative|absolute)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Margin utilities
    {
      pattern: /^m(x|l|r)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-color-1': 'var(--tw-primary-color-1)',
        'primary-color-2': 'var(--tw-primary-color-2)',
        'primary-color-3': 'var(--tw-primary-color-3)',

        // Secondary Colors
        'secondary-color-1': 'var(--tw-secondary-color-1)',
        'secondary-color-2': 'var(--tw-secondary-color-2)',
        'secondary-color-3': 'var(--tw-secondary-color-3)',
        'secondary-color-4': 'var(--tw-secondary-color-4)',

        // Neutral Colors (prefixed)
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
};

export default config;
