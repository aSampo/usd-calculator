import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#FFFFFF",
      100: "#C5E4E7",
      200: "#9FE8DF",
      300: "#60ABA1",
      400: "#1BC3AA",
      500: "#00474B",
    },
    secondary: {
      50: "#657173",
      100: "#C47A6F",
      200: "#F3F8FB"
    },
  },
});

export default theme;
