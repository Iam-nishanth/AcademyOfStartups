import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "@/context/AuthContext";
import Head from "next/head";
import AuthVerify from "@/components/HighOrders/AuthVerify";


export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <AuthContextProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AuthVerify />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </AuthContextProvider>
      </StyleSheetManager>
    </>
  );
}
