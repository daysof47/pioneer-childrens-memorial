import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    const year = new Date();
    return (
      <footer className="py-12 lg:py-24">
        <div className="text-center">
          Copyright &copy; {year.getFullYear()} Days of 47 Inc. | All Rights
          Reserved | Terms of Service
        </div>
        <div>
          <ul className="flex justify-center my-8">
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
        <div className="flex justify-center">
          <img
            src={logo}
            alt="This Is The Place"
            style={{ width: "8em", height: "8em" }}
          />
        </div>
      </footer>
    );
  }
};

export default Footer;
