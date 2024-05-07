import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    heading: {
      "gradient": "linear-gradient(90deg, #81008c 0%, #540096 100%)",
    },
    text: {
      "base": "rgba(40, 40, 40, 1)",
    },
    primary: {
      "main": "rgba(227, 80, 80, 1)",
    },
    bg: {
      "main": "rgba(243, 189, 191, 1)",
    },
    footer: {
      "base": "rgba(51, 51, 51, 1)",
    },
    black: {
      "base": "rgba(0, 0, 0, 1)",
    },
    btn: {
      "main": "rgba(151, 52, 153, 1)",
    },
    light: {
      "base": "rgba(255, 255, 255, 1)",
    },
  },
});

export default theme;
