// Library Imports
import { createTheme } from "@nextui-org/react";
import { orange100, orange200, orange300, orange400, orange500, orange600 } from "../../libraries/Web-Legos/api/colors";

/** Default NextUI compatible theme object (lightmode only for now) */
export const nextUiTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: orange100,
      primaryLightHover: orange200,
      primaryLightActive: orange300,
      primaryLightContrast: orange500,
      primary: orange500,
      primaryBorder: orange400,
      primaryBorderHover: orange500,
      primarySolidHover: orange600,
      primarySolidContrast: "#ffffff",
      primaryShadow: orange500,

      success: "#A6C437",
      white: "#ffffff",  

      textPurple: "#291250"
    },
    space: {},
    fonts: {
      sans: "Nunito"
    },
    fontSizes: {
      xs: '0.75rem', 
      sm: '0.875rem', 
      base: '1rem', 
      md: '1rem', 
      lg: '1.125rem', 
      xl: '1.25rem', 
      '2xl': '1.5rem', 
      '3xl': '1.875rem', 
      '4xl': '2.25rem', 
      '5xl': '3rem', 
      '6xl': '3.75rem', 
      '7xl': '4.5rem', 
      '8xl': '6rem', 
      '9xl': '8rem', 
    },
  }
})