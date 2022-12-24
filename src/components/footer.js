import * as React from 'react';

const Footer = () => {
    return (
        <footer>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 pt-3" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {new Date().getFullYear()} Jesse Doka. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer;