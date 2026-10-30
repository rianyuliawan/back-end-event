import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main
        className={cn(
          inter.className,
          "flex min-h-screen w-full min-w-0 flex-col items-center justify-center px-4 py-10 lg:px-10",
        )}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}