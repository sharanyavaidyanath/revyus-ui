import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import "tailwindcss/tailwind.css";
import SELECTOR from "../components/selector";

function Revyus({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-1  md:flex h-screen">
      <Sidebar />

      <div className="col-span-full row-span-full md:flex-grow h-screen overflow-y-auto text-gray-900 p-3 bg-gray-200">
        <Component {...pageProps} />
      </div>

      <SELECTOR />
    </div>
  );
}

export default Revyus;
