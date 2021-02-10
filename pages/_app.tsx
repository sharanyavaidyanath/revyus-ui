import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Revyus</a>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <a>Reports</a>
            </Link>
          </li>
          <li>
            <Link href="/workspaces">
              <a>Workspaces</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
