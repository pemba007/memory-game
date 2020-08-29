import "../src/styles/index.css";
import NProgress from "nprogress";
import Router from "next/router";

import { AnimatePresence } from "framer-motion";

import React, { useState } from "react";

import { CssBaseline } from "@material-ui/core";
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

if (env === "production") {
  console.log = function () {};
  console.warn = function () {};
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      text: {
        // primary: "#000",
      },
    },
  });
  const _handleThemeChange = () => {
    console.log("Changing theme");
    setDarkState(!darkState);
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        <MaterialThemeProvider theme={darkTheme}>
          <style jsx global>
            {`
              html {
                overflowx: hidden !important;
              }
            `}
          </style>
          <CssBaseline />
          <Component {...pageProps} themeChange={_handleThemeChange} />
        </MaterialThemeProvider>
      </AnimatePresence>
    </>
  );
}
