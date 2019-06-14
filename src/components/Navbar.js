import React from "react";
import { Link } from "gatsby";
import thePlacelogo from "../img/this-is-the-place-logo.png";
import logo from "../img/d47-logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="absolute pin-t w-full z-50 p-4"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="mx-4">
              <Link to="/" title="Logo">
                <img
                  src={thePlacelogo}
                  alt="This Is The Place"
                  style={{ width: "60px", position: "absolute" }}
                />
                <img
                  src={logo}
                  alt="Days of 47"
                  style={{ width: "90px", marginLeft: "85px" }}
                />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`flex-1 flex justify-around mx-4 ${this.state.navBarActiveClass}`}
            >
              <Link
                to="/"
                className="text-white uppercase tracking-widest text-sm inline-block p-3"
              >
                The Stories
              </Link>
              <Link
                to="/"
                className="text-white uppercase tracking-widest text-sm inline-block p-3"
              >
                The Children
              </Link>
              <Link
                to="/"
                className="text-white uppercase tracking-widest text-sm inline-block p-3"
              >
                Tour the Memorial
              </Link>
              <Link
                to="/"
                className="text-white uppercase tracking-widest text-sm inline-block p-3"
              >
                About the Memorial
              </Link>
            </div>
            <div className="mx-4">
              <Link
                to="/"
                className="inline-block uppercase py-3 px-8 bg-white text-green text-sm tracking-widest shadow font-bold"
              >
                Visit the Memorial
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
