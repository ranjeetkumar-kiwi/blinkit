import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { getPageTitle } from "./constant/util";



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("router", router);
  const pageTitle = getPageTitle(router.pathname);
  return (
    <ThemeProvider theme={theme}>
      <ClientOnly>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </ClientOnly>
    </ThemeProvider>
  );
}
