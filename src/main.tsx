import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./config/chakra-theme.tsx";
import App from "./App.tsx";
import { Provider } from "react-redux";
import stores from "./../stores/stores";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={stores}>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
