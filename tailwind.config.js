/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--surface-page)",
        surface: {
          section: "var(--surface-section)",
          card: "var(--surface-card)",
          subtle: "var(--surface-subtle)",
          elevated: "var(--surface-elevated)",
        },
        primary: {
          DEFAULT: "var(--action-primary)",
          hover: "var(--action-primary-hover)",
          active: "var(--action-primary-active)",
          disabled: "var(--action-primary-disabled)",
        },
        strong: {
          DEFAULT: "var(--action-strong)",
          hover: "var(--action-strong-hover)",
          active: "var(--action-strong-active)",
          disabled: "var(--action-strong-disabled)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-on-dark)",
          brand: "var(--text-on-brand)",
          strong: "var(--text-on-strong)",
        },
        border: {
          DEFAULT: "var(--border-default)",
          subtle: "var(--border-subtle)",
          focus: "var(--border-focus)",
          disabled: "var(--border-disabled)",
        },
        status: {
          success: "var(--status-success)",
          "success-surface": "var(--status-success-surface)",
          warning: "var(--status-warning)",
          "warning-surface": "var(--status-warning-surface)",
          error: "var(--status-error)",
          "error-surface": "var(--status-error-surface)",
        },
        link: {
          DEFAULT: "var(--link-default)",
          hover: "var(--link-hover)",
        },
        highlight: "var(--highlight)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        cta: "var(--shadow-cta)",
      },
    },
  },
  plugins: [],
};
