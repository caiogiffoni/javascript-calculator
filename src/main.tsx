import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Providers>
);
