// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const brand = {
  colors: {
    bg_otp: "#c9c9c9",
    bg_otp_hover: "black",
  },
};

const theme = extendTheme({ brand });

export { theme };
