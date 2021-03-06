import React from "react";
import { Link } from "gatsby";

import logo1 from "../img/gray-logo-1.png";
import logo2 from "../img/gray-logo-2.png";
import logo3 from "../img/gray-logo-3.png";

const Footer = class extends React.Component {
  render() {
    const year = new Date();
    return (
      <footer className="p-8 text-gray-200 text-sm lg:text-base">
        <div className="container mx-auto">
          <hr className="border-gray-700 border-b my-12" />

          <div className="text-center flex flex-wrap justify-center">
            <div className="m-2 w-full lg:w-auto">
              Copyright &copy; {year.getFullYear()} Days of 47 Inc.
            </div>
            <div className="m-2 hidden lg:block">|</div>
            <div className="m-2 w-auto">All Rights Reserved</div>
            <div className="m-2 w-auto">|</div>
            <div className="m-2 w-auto">
              <Link to="/secondaries/privacy-policy" className="text-gray-200">
                Privacy Policy
              </Link>
            </div>
            <div className="m-2 w-auto">|</div>
            <div className="m-2 w-auto">
              <Link to="/secondaries/terms-of-use" className="text-gray-200">
                Terms of Use
              </Link>
            </div>
          </div>
          <div>
            <ul className="footer-nav lg:flex lg:justify-center my-8 font-bold text-center tracking-wide">
              <li className="my-2">
                <Link className="text-gray-200" to="/stories">
                  The Stories
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-gray-200" to="/the-children">
                  The Children
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-gray-200" to="/tour">
                  Tour The Memorial
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-gray-200" to="/about">
                  About The Memorial
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-gray-200" to="/visit">
                  Visit The Memorial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-nav lg:flex lg:justify-center my-4 font-bold text-center tracking-wide">
              <li className="my-2">
                <a
                  href="https://daysof47.formstack.com/forms/pioneer_children_story"
                  target="_blank"
                  className="font-bold text-green uppercase tracking-wider"
                  rel="noopener noreferrer"
                >
                  Submit a Child's Name or Story
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center text-center">
            <a
              href="https://www.thisistheplace.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo1}
                alt="This Is The Place"
                className="my-8 mx-auto lg:mx-4"
              />
            </a>
            <a
              href="https://www.familysearch.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo2}
                alt="Family Search"
                className="my-8 mx-auto lg:mx-4"
              />
            </a>
            <a
              href="https://www.daysof47.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo3}
                alt="Days of 47"
                className="my-8 mx-auto lg:mx-4"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
