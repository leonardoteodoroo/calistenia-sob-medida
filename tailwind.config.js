/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--surface-page)',
        surface: {
          section: 'var(--surface-section)',
          card: 'var(--surface-card)',
          subtle: 'var(--surface-subtle)',
          elevated: 'var(--surface-elevated)',
        },
        primary: {
          DEFAULT: 'var(--action-primary)',
          hover: 'var(--action-primary-hover)',
          active: 'var(--action-primary-active)',
          disabled: 'var(--action-primary-disabled)',
        },
        strong: {
          DEFAULT: 'var(--action-strong)',
          hover: 'var(--action-strong-hover)',
          active: 'var(--action-strong-active)',
          disabled: 'var(--action-strong-disabled)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-on-dark)',
        },
        border: {
          DEFAULT: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          focus: 'var(--border-focus)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'serif'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        cta: 'var(--shadow-cta)',
      }
    },
  },
  plugins: [],
}
