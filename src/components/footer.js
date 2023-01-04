import * as React from 'react';

const Footer = ({socialink}) => {
    const socials = [
        {
            name: "Twitter",
            url: "https://twitter.com/chukky_iii",
        },
        {
            name: "Github",
            url: "https://github.com/chukkyiii",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/jesse-doka-697519212",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/jesse.doka/",
        },
    ];

    return (
        <footer>
            {!socialink ? 
            (
                <div className="mx-auto max-w-xl pb-3">
                    <div className="flex flex-row justify-center">
                        {socials.map((social) => (
                            <a href={social.url} target="_blank" rel="noreferrer">
                                <div className="flex flex-col items-center pt-36">
                                    <div className="text-lg">
                                        {social.name}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div> 
                ) : (
                    <div className="sm:relative">
                        <div className="sm:absolute sm:bottom-0 sm:left-0">
                            <a href={socialink?.url} target="_blank" rel="noreferrer">
                                <div className="text-xl">
                                    {socialink?.name}
                                </div>
                            </a>
                        </div>
                    </div>
                ) 
            }
            

            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 pt-3" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {new Date().getFullYear()} Jesse Doka. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer;