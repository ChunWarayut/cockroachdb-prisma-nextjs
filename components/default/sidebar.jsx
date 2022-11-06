import Script from "next/script";
import { SIDEBAR } from "./data";

export default function DefaultSidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              {SIDEBAR.map((item, index) => (
                <li key={index}>
                  <a
                    href={item?.href}
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    {item?.icon}
                    <span className="ml-3">{item?.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            {/* <div className="space-y-2 pt-2">
              <bottom
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
              >
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gem"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                  ></path>
                </svg>
                <span className="ml-4">ออกจากระบบ</span>
              </bottom>
            </div> */}
          </div>
        </div>
      </div>

      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      <Script src="https://demo.themesberg.com/windster/app.bundle.js"></Script>
    </aside>
  );
}
