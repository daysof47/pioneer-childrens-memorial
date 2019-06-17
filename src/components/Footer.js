import React from "react";
import { Link } from "gatsby";

import logo1 from "../img/gray-logo-1.png";
import logo2 from "../img/gray-logo-2.png";
import logo3 from "../img/gray-logo-3.png";

const Footer = class extends React.Component {
  render() {
    const year = new Date();
    return (
      <footer className="py-12 lg:py-24 text-gray-300">
        <div className="text-center">
          Copyright &copy; {year.getFullYear()} Days of 47 Inc. | All Rights
          Reserved | Terms of Service
        </div>
        <div>
          <ul className="footer-nav flex justify-center my-8 font-bold">
            <li>
              <Link to="/">The Stories</Link>
            </li>
            <li>
              <Link to="/">The Children</Link>
            </li>
            <li>
              <Link to="/">Tour The Memorial</Link>
            </li>
            <li>
              <Link to="/">About The Memorial</Link>
            </li>
            <li>
              <Link to="/">Visit The Memorial</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo1} alt="This Is The Place" className="mx-4" />
          <img src={logo2} alt="Family Search" className="mx-4" />
          <img src={logo3} alt="Days of 47" className="mx-4" />
        </div>
      </footer>
    );
  }
};

export default Footer;
