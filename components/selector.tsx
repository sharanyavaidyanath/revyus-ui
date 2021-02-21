import ICONS from "../components/icons";

const SELECTOR_ITEMS = [
  { name: "Input Text", icon: <ICONS.INPUT className="h-5 w-5" /> },
  { name: "Radio Button", icon: <ICONS.RADIO_BUTTON className="h-5 w-5" /> },
  {
    name: "Multiple Choice",
    icon: <ICONS.MULTIPLE_CHOICE className="h-5 w-5" />,
  },
  { name: "Star Rating", icon: <ICONS.STAR_RATING className="h-5 w-5" /> },
];

function SELECTOR() {
  return (
    <div
      className="grid grid-flow-row h-screen bg-gray-400 shadow-selector text-white"
      style={{ minWidth: 250 }}
    >
      <div className="grid grid-flow-row">
        <span>CONTROLS</span>
        <ul className="px-1.5 divide-y divide-white-400 ">
          {SELECTOR_ITEMS.map(({ name, icon }) => (
            <li key={name} className="pl-3 pr-6 py-1.5">
              <button className="w-full flex align-middle space-x-2 focus:outline-none">
                {icon}
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>LANGUAGES</div>
      <div>
        <button>
          <ICONS.PREVIEW className="h-5 w-5" /> Preview
        </button>
        <button>
          <ICONS.PUBLISH className="h-5 w-5" /> Publish
        </button>
        <button>
          <ICONS.DELETE className="h-5 w-5" /> Delete
        </button>
      </div>
    </div>
  );
}
export default SELECTOR;
