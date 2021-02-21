/* eslint-disable react/display-name */
const ICONS = {
  WORKSPACES: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  REPORTS: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  HOME: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  SETTINGS: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  MENU: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  CLOSE: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  INPUT: ({ className }: { className: string }) => (
    <svg
      viewBox="0 0 28 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="A4-Copy"
          transform="translate(-527.000000, -157.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g
            id="3467869191596026738"
            transform="translate(528.000000, 157.000000)"
          >
            <rect id="Rectangle" x="0" y="5" width="26" height="10"></rect>
            <path d="M3,8 L7,8" id="Path"></path>
            <path d="M5,12 L5,8" id="Path"></path>
            <path d="M8,1 L12,1" id="Path"></path>
            <path d="M8,19 L12,19" id="Path"></path>
            <path d="M10,19 L10,1" id="Path"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  RADIO_BUTTON: ({ className }: { className: string }) => (
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="A4-Copy"
          transform="translate(-448.000000, -218.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g
            id="20798060871595452487"
            transform="translate(449.000000, 219.000000)"
          >
            <path d="M14,2 L26,2" id="Path"></path>
            <path d="M14,6 L21,6" id="Path"></path>
            <path d="M14,18 L26,18" id="Path"></path>
            <path d="M14,22 L21,22" id="Path"></path>
            <circle id="Oval" cx="5" cy="5" r="5"></circle>
            <circle id="Oval" cx="5" cy="21" r="5"></circle>
            <circle id="Oval" cx="5" cy="5" r="1"></circle>
          </g>
        </g>
      </g>
    </svg>
  ),
  MULTIPLE_CHOICE: ({ className }: { className: string }) => (
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="A4-Copy"
          transform="translate(-448.000000, -153.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g
            id="4776566291595452484"
            transform="translate(449.000000, 154.000000)"
          >
            <path
              d="M8,10 L2,10 C0.9,10 0,9.1 0,8 L0,2 C0,0.9 0.9,0 2,0 L8,0 C9.1,0 10,0.9 10,2 L10,8 C10,9.1 9.1,10 8,10 Z"
              id="Path"
            ></path>
            <path
              d="M8,26 L2,26 C0.9,26 0,25.1 0,24 L0,18 C0,16.9 0.9,16 2,16 L8,16 C9.1,16 10,16.9 10,18 L10,24 C10,25.1 9.1,26 8,26 Z"
              id="Path"
            ></path>
            <path d="M14,2 L26,2" id="Path"></path>
            <path d="M14,6 L21,6" id="Path"></path>
            <path d="M14,18 L26,18" id="Path"></path>
            <path d="M14,22 L21,22" id="Path"></path>
            <polyline id="Path" points="3 4 5 6 8 3"></polyline>
          </g>
        </g>
      </g>
    </svg>
  ),
  STAR_RATING: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  ),
  PREVIEW: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ),
  PUBLISH: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    </svg>
  ),
  DELETE: ({ className }: { className: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
};
export default ICONS;
