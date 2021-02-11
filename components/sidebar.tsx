import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import IMAGES from "./images";

const SIDEBAR_ITEMS = [
  { path: "/", icon: IMAGES.REVIEW, name: "Revyus" },
  { path: "/reports", icon: IMAGES.REPORT, name: "Reports" },
  { path: "/workspaces", icon: IMAGES.WORKSPACES, name: "Workspaces" },
  { path: "/settings", icon: IMAGES.SETTINGS, name: "Settings" },
];

function Sidebar() {
  const router = useRouter();
  return (
    <aside className="flex-none bg-gray-700 h-screen overflow-y-auto text-white">
      <ul className="px-1.5">
        {SIDEBAR_ITEMS.map(({ path, icon, name }) => (
          <li
            key={name}
            className={`px-6 py-1.5 rounded-lg ${
              router.pathname === path ? "bg-gray-500" : ""
            }`}
          >
            <Link href={path}>
              <a className="flex align-middle space-x-2">
                <img src={icon} alt={name} className="h-6 w-6" />
                <span>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
