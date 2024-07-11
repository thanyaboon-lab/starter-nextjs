import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      textColor: {
        "default": "var(--text-color-default)",
        "secondary": "var(--text-color-secondary)"
      },
      backgroundColor: {
        "default": "var(--bg-color-default)",
        "page": "var(--bg-color-page)"
      },
    },
    fontFamily: {
      "noto-sans": "var(--font-notoSans)",
    },
    borderRadius: {
      "btn": "var(--rounded-btn)",
      "box": "var(--rounded-box)",
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
};
export default config;
