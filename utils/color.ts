import { Theme, Variant } from "@/interfaces/base/color";

// const root = document.documentElement;
// const rootStyles = getComputedStyle(root);

export interface DefaultTheme extends Partial<Record<Variant, Theme>> {}

export const defaultTheme: DefaultTheme = {
  primary: {
    main: "rgb(105, 108, 255)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(135, 137, 255)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(94, 97, 230)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
  secondary: {
    main: "rgb(133, 146, 163)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(157, 168, 181)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(120, 131, 147)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
  success: {
    main: "rgb(113, 221, 55)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(141, 228, 95)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(102, 199, 50)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
  warning: {
    main: "rgb(255, 171, 0)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(255, 188, 51)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(230, 154, 0)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
  error: {
    main: "rgb(255, 62, 29)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(255, 101, 74)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(230, 56, 26)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
  info: {
    main: "rgb(3, 195, 236)", // rootStyles.getPropertyValue("--primary-color"),
    light: "rgb(53, 207, 240)", // rootStyles.getPropertyValue("--primary-color-light"),
    dark: "rgb(3, 175, 212)", // rootStyles.getPropertyValue("--primary-color-dark"),
  },
};

export function rgbStringToHex(rgb: string): string {
  // Extract the numbers from the rgb() string using a regular expression
  const rgbValues = rgb.match(/\d+/g);

  if (!rgbValues || rgbValues.length !== 3) {
    throw new Error("Invalid rgb() format");
  }

  // Convert the values to numbers
  const [r, g, b] = rgbValues.map(Number);

  // Function to convert a number to a two-digit hex string
  const toHex = (value: number) => {
    const hex = Math.max(0, Math.min(255, value)).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Combine the hex values into a single hex string
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLocaleUpperCase();
}

export function getColorByVariant(variant?: Variant) {
  if (variant) return defaultTheme[variant];
  return defaultTheme.primary;
}
