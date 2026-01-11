import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Orbitron', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        backgroundBase: {
          value: "#f0f4f8", // Light silver/blueish white
        },
        fontWhite: {
          value: "#1a202c", // Dark text for light mode
        },
        fontPasif: {
          value: "#718096", // Cool gray
        },
        delete: {
          active: {
            value: "#e53e3e",
          },
          pasif: {
            value: "#feb2b2",
          },
        },
        arsip: {
          active: {
            value: "#d69e2e",
          },
          pasif: {
            value: "#fbd38d",
          },
        },
        // New futuristic accents
        accent: {
          cyan: { value: "#00f2ff" },
          purple: { value: "#bc13fe" },
          glass: { value: "rgba(255, 255, 255, 0.4)" }, // Glassmorphism base
          glassBorder: { value: "rgba(255, 255, 255, 0.6)" },
        }
      },
    },
  },
});
