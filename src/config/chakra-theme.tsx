import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        backgroundBase: {
          value: "rgb(32, 33, 36)",
        },
        fontWhite: {
          value: "white",
        },
        fontPasif: {
          value: "rgb(153, 153, 153)",
        },
        delete: {
          active: {
            value: "rgb(176, 0, 32)",
          },
          pasif: {
            value: "#f44336",
          },
        },
        arsip: {
          active: {
            value: "rgb(196, 144, 0)",
          },
          pasif: {
            value: "#ffeb3b",
          },
        },
      },
    },
  },
});
