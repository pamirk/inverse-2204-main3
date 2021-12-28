/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { Container } from "components/design";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "NFT",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/nft",
    icon: CursorClickIcon,
  },
  {
    name: "Roadmap",
    description: "Your customers' data will be safe and secure.",
    href: "/road-map",
    icon: ShieldCheckIcon,
  },
  {
    name: "How it works",
    description: "Connect with third-party tools that you're already using.",
    href: "/how-it-works",
    icon: ViewGridIcon,
  },
  {
    name: "Blogs",
    description: "Connect with third-party tools that you're already using.",
    href: "/blog",
    icon: ViewGridIcon,
  },
];

const Header = (props) => {
  return (
    <Popover className="absolute bg-transparent font-raleway w-full">
      <Container className="mx-0" maxWidth="xl">
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20 w-full">
          <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <Link to="/" className="flex">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/images/coloredmark.png"
                  alt=""
                />
                <span className="font-quantico ml-4 text-4xl text-white">
                  Meta Blackout
                </span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-transparent border-2 border-yellow-400 p-2 inline-flex items-center justify-center text-yellow-400 hover:text-yellow-500 hover:bg-yellow-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
              {solutions.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    clsx(
                      "border-b-2 border-transparent pb-2 ml-8 text-base font-medium text-white hover:text-yellow-400",
                      {
                        "text-yellow-400 border-b-2 border-yellow-400":
                          isActive,
                      }
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 transition transform origin-top-right md:hidden"
          >
            <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white border-2 border-gray-400 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className={({ isActive }) =>
                            clsx(
                              "border-l-2 border-transparent -m-3 flex items-center p-3 hover:bg-gray-50 ml-4 text-base font-medium text-gray-900",
                              {
                                "border-l-2 border-gray-500": isActive,
                              }
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Container>
    </Popover>
  );
};

export default Header;
