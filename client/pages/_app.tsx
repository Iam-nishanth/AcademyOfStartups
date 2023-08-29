import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <AuthContextProvider>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </StyleSheetManager>
    </AuthContextProvider>
  );
}
