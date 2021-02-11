import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import "tailwindcss/tailwind.css";

function Revyus({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-1  md:flex h-screen bg-gray-100">
      <Sidebar />
      <div className="col-span-full row-span-full md:flex-grow h-screen overflow-y-auto text-black p-3">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Revyus;
