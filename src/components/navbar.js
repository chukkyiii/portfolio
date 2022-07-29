import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Icon from '../images/icon.svg';
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
        <header>
          <div className="mx-auto flex items-center justify-center max-w-2xl">
            <Icon className="w-12 h-12" />
            <nav>
              <ul className="flex pl-32">
                {menu.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.path}
                      className="pl-8"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </main>
    );
}

export default Navbar;