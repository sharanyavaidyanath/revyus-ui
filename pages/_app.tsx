import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import "tailwindcss/tailwind.css";

function Revyus({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Sidebar />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Revyus;
