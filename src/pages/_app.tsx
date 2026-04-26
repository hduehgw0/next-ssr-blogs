import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Algo Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Qiitaライクなブログです。" />
      </Head>

      <Header />

      <main className="container mx-auto flex-1 px-4 py-8">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
