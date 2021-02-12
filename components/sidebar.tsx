import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";
import ICONS from "./icons";

const SIDEBAR_ITEMS = [
  { path: "/", icon: <ICONS.HOME className="h-6 w-6" />, name: "Home" },
  {
    path: "/reports",
    icon: <ICONS.REPORTS className="h-6 w-6" />,
    name: "Reports",
  },
  {
    path: "/workspaces",
    icon: <ICONS.WORKSPACES className="h-6 w-6" />,
    name: "Workspaces",
  },
  {
    path: "/settings",
    icon: <ICONS.SETTINGS className="h-6 w-6" />,
    name: "Settings",
  },
];

function Sidebar() {
  const router = useRouter();
  const [shown, setShown] = useState(false);
  const hide = useCallback(() => setShown(false), []);
  const show = useCallback(() => setShown(true), []);
  const goTo = useCallback(
    (path: string) => () => {
      router.push(path);
      hide();
    },
    []
  );
  return (
    <>
      <div
        className={`col-span-full row-span-full md:flex-none z-10 ${
          shown ? "visible" : "invisible"
        } md:visible`}
      >
        <aside
          className="h-screen bg-gray-800 overflow-y-auto text-white shadow-sidebar"
          style={{ minWidth: 175 }}
        >
          <div className="flex align-middle">
            <span className="flex-grow text-2xl font-bold px-3 py-4">
              REVYUS
            </span>
            <button
              className="focus:outline-none md:invisible px-3 py-1"
              onClick={hide}
            >
              <ICONS.CLOSE className="h-6 w-6" />
            </button>
          </div>
          <ul className="px-1.5">
            {SIDEBAR_ITEMS.map(({ path, icon, name }) => (
              <li
                key={name}
                className={`pl-3 pr-6 py-1.5 rounded-lg ${
                  router.pathname === path ? "bg-gray-900" : ""
                }`}
              >
                <button
                  className={`w-full flex align-middle space-x-2 focus:outline-none ${
                    router.pathname === path
                      ? "text-gray-100 font-medium"
                      : "text-gray-400"
                  }`}
                  onClick={goTo(path)}
                >
                  {icon}
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <button
        className={`fixed rounded-full bg-gray-700 p-2 focus:outline-none shadow right-0.5 top-1 text-white ${
          shown ? "invisible" : "visible"
        } md:invisible`}
        onClick={show}
      >
        <ICONS.MENU className="h-4 w-4" />
      </button>
    </>
  );
}

export default Sidebar;
