import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const timeoutRef = useRef();

  // const clearTimer = useCallback(() => clearTimeout(timeoutRef.current), []);

  // useEffect(() => {
  //   if (timeoutRef.current) clearTimer();

  //   timeoutRef.current = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);

  //   return () => {
  //     clearTimer();
  //   };
  // }, [clearTimer]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <AnimatePresence>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
