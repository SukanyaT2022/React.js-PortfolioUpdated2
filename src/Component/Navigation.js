import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import myLogo from "../Images/logo.webp";
import myResume from "../Images/resume2025.pdf";
import './Navigation.css'

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Resume", href: "resume", current: false },
  { name: "About Me", href: "aboutme", current: false },
  { name: "Portfolio", href: "portfolio", current: false },
  { name: "React.js | Next.js", href: "reactportfolio", current: false },
  { name: "ReactNative", href: "reactnative", current: false },
  { name: "IOS & SwiftUI", href: "swiftportfolio", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  return (
    // control whole nav bar
    <Disclosure as="nav" className="bg-[#eeeeee]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:py-2 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* logo div */}
              <div className="flex flex-shrink-0 items-center justify-center relative inset-full top-0  xl:left-0 md:left-2/4 left-36">
                  <a href="/">
                    <img
                      className="h-14 w-auto block mx-auto  xl:pl-0"
                      src={myLogo}
                      alt="logo"
                    />
                  </a>
                </div>

              <div className="flex flex-1 items-center justify-center  lg:items-stretch lg:justify-center  xl:items-stretch xl:justify-center">
                {/* targetLogo */}
               
                <div className="hidden lg:ml-6 xl:block">
                  {/* control the whole bloc of nav bar */}

                  <div className="flex space-x-4 pt-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-grey-700  hover:text-[#0088cc]"
                            : "text-gray-800  hover:text-[#0088cc]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                {/* download CV */}
                {/* <a href={myResume}>
                  <button className="border-2 bg-[#eeeeee] border-gray-800 py-2 px-5 rounded-3xl text-sm">
                    Download CV
                  </button>
                </a> */}

                {/* <button class="custom-btn btn-6"><span>Download CV</span></button> */}
                <a href={myResume}>
                  <button class="rainbow-btn">Download CV</button>
                </a>
                    
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-gray-700 hover:text-[#0088cc]"
                      : "text-gray-700 hover:text-[#0088cc]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Navigation;
