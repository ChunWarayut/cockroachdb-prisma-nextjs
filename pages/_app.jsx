import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      <Script src="https://demo.themesberg.com/windster/app.bundle.js"></Script>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
