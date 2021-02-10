import Link from "next/link";

const SIDEBAR_ITEMS = [
  { path: "/", name: "Revyus" },
  { path: "/reports", name: "Reports" },
  { path: "/workspaces", name: "Workspaces" },
  { path: "/settings", name: "Settings" },
];

function Sidebar() {
  return (
    <aside>
      <ul>
        {SIDEBAR_ITEMS.map(({ path, name }) => (
          <li key={name}>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
