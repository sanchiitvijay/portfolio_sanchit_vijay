const { nextui } = require("@nextui-org/react");
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(180deg, rgba(9,9,0,1) 0%, rgba(9,9,0,0) 10%, rgba(9,9,0,0) 50%, rgba(9,9,0,0) 90%, rgba(9,9,0,1) 100%)",
        "horizontal-vignette":
          "linear-gradient(90deg, rgba(9,9,0,1) 0%, rgba(9,9,0,1) 6%, rgba(9,9,0,0) 50%, rgba(9,9,0,0) 90%, rgba(9,9,0,1) 100%)",
      }),
      fontFamily: {
        maison: ["Maison Neue Extended", "sans-serif"],
        garamond: ["Apple Garamond","serif"],
      },
      screens: {
        sm: "360px",
        md: "834px",
        xl: "1440px",
      },
      fontSize: {
        xsm: "10.2px",
        sm: "12.8px",
        base: "16px",
        xl: "20px",
        "2xl": "25px",
        "3xl": "31.3px",
        "4xl": "39.1px",
        "5xl": "48.8px",
        "6xl": "61px",
      },
      animation: {
        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(0%)",
          },
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
