import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";
import IMAGES from "./images";

const SIDEBAR_ITEMS = [
  { path: "/", icon: IMAGES.HOME, name: "Home" },
  { path: "/reports", icon: IMAGES.REPORT, name: "Reports" },
  { path: "/workspaces", icon: IMAGES.WORKSPACES, name: "Workspaces" },
  { path: "/settings", icon: IMAGES.SETTINGS, name: "Settings" },
];

function Sidebar() {
  const router = useRouter();
  const [shown, setShown] = useState(true);
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
        <aside className="h-screen bg-gray-700 overflow-y-auto text-white shadow-sidebar">
          <div className="flex align-middle">
            <span className="flex-grow text-2xl font-bold px-3 py-4">
              REVYUS
            </span>
            <button
              className="p-3 focus:outline-none md:invisible"
              onClick={hide}
            >
              <img src={IMAGES.CLOSE} alt="close" className="h-4 w-4" />
            </button>
          </div>
          <ul className="px-1.5">
            {SIDEBAR_ITEMS.map(({ path, icon, name }) => (
              <li
                key={name}
                className={`pl-3 pr-6 py-1.5 rounded-lg ${
                  router.pathname === path ? "bg-gray-500" : ""
                }`}
              >
                <button
                  className="flex align-middle space-x-2 focus:outline-none"
                  onClick={goTo(path)}
                >
                  <img src={icon} alt={name} className="h-6 w-6" />
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <button
        className={`fixed rounded-full bg-gray-700 p-2 focus:outline-none shadow right-0.5 top-1 ${
          shown ? "invisible" : "visible"
        } md:invisible`}
        onClick={show}
      >
        <img src={IMAGES.MENU} alt="home" className="h-4 w-4" />
      </button>
    </>
  );
}

export default Sidebar;
