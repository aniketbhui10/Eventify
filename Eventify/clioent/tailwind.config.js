/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#1f2937",
          "200": "#111827",
        },
        white: "#fff",
        mediumspringgreen: "#22c55e",
        darkgray: "#9ca3af",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "11xl": "30px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
