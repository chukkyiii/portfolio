import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Icon from '../images/icon.svg';
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = ({pageTitle}) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const menu = [
      { title: 'README', path:'/' },
      { title: 'PRØJECTS', path: 'https://github.com/chukkyiii?tab=repositories' },
      { title: 'BLØG', path: '/blog' }
  ]

  return (
    <main>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div>
              <div style={loading_bar}></div>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex justify-end sm:mx-auto sm:mb-9 sm:flex sm:items-center sm:justify-between sm:max-w-2xl">
                    <div className="flex-shrink-0 flex">
                      <Icon className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {menu.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.path}
                              className="pl-8 hover:text-amber-500"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menu.map((item) => (
                  <Disclosure.Button
                    key={item.title}
                    as="a"
                    href={item.path}
                    className={
                      "block px-3 py-2 rounded-md text-base font-medium"
                    }
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </main>
  );
}

export default Navbar;

{/* <div className="mx-auto mb-9 flex items-center justify-between max-w-2xl ">
                  <Icon className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
                  <nav>
                    <ul className="flex">
                      {menu.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.path}
                            className="pl-8 hover:text-amber-500"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div> */}