import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../lib/auth";
import "../public/styles/slick-theme-laya.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
