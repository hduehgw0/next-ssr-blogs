import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-8">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
