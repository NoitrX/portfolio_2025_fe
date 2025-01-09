import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-base-200/50 rounded-box shadow">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link text-base-content link-neutral text-xl font-semibold no-underline"
                href="#"
              >
                NoitrX
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#default-navbar-collapse"
                  aria-controls="default-navbar-collapse"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4" />
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4" />
                </button>
              </div>
            </div>
          </div>
          <div
            id="default-navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
          >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-sm max-md:mt-2">
              <li>
                <a className="tracking-[1px]" href="#">Home</a>
              </li>
              <li>
                <a className="tracking-[1px]" href="#">About Me</a>
              </li>
              <li>
                <a className="tracking-[1px]" href="#">Works</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
