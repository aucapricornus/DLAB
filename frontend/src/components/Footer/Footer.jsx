import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="flex w-full h-32 px-9 py-4 bg-bright-blue">
      <div
        className="flex flex-wrap justify-center items-center  w-full   "
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <div className="flex flex-row justify-center items-center md:ml-6">
          <p className="mr-1 text-sm text-white sm:text-center dark:text-white">
            © Copyright 2023
          </p>
          <a className="text-lg text-white transition duration-300 group">·</a>
          <p className="ml-1 text-lg text-white transition duration-300 group">
            Devsafio
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-white"></span>
          </p>
        </div>
        <div className="flex flex-grow justify-end items-end text-white m-5">
          <ul className="flex flex-wrap mt-3 text-sm font-medium sm:mt-0">
            <li className="mr-2">
              <SocialIcon
                bgColor="white"
                url="https://www.linkedin.com/company/devsafio/"
                style={{ height: 40, width: 40 }}
              />
            </li>
            <li>
              <SocialIcon
                bgColor="white"
                url="mailto:contacto@devsafio.com?subject=Hello!"
                style={{ height: 40, width: 40 }}
              />
            </li>
            <li>
              {isVisible && (
                <button
                  className="fixed m-auto right-4 bottom-10 sm:bottom-12 md:bottom-12 lg:bottom-12 p-3 text-white bg-gray-700 rounded-full transition-colors duration-300 hover:bg-gray-600"
                  // style={{ marginBottom: "3.6rem", height: 40, width: 40 }}
                  onClick={handleClick}
                >
                  <FaArrowUp />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
