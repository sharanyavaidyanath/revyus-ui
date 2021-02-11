import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import "tailwindcss/tailwind.css";

function Revyus({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-yellow-100 h-screen overflow-y-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Revyus;
