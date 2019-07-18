import React from "react";
import { Link } from "gatsby";
import thePlacelogo from "../img/this-is-the-place-logo.png";
import logo from "../img/d47-logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "hidden lg:flex"
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
              navBarActiveClass: "block lg:flex"
            })
          : this.setState({
              navBarActiveClass: "hidden lg:flex"
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
          <div className="flex flex-wrap justify-between items-center">
            <Link to="/" className="w-1/2 md:w-1/6 flex items-center">
              <img
                src={logo}
                alt="Days of 47"
                className="mx-2"
                style={{width: "45%"}}
              />
              <img
                src={thePlacelogo}
                alt="This Is The Place"
                className="mx-2"
                style={{width: "45%"}}
              />
            </Link>
            <button
              className="hamburger lg:hidden"
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              Open Menu
            </button>
            <div
              id="navMenu"
              className={`w-full mt-4 lg:mt-0 bg-white lg:bg-transparent lg:flex-1 lg:justify-around lg:mx-4 ${this.state.navBarActiveClass}`}
            >
              <Link
                to="/stories"
                className="lg:text-white uppercase tracking-widest text-sm block font-bold p-3"
              >
                The Stories
              </Link>
              <Link
                to="/the-children"
                className="lg:text-white uppercase tracking-widest text-sm block font-bold p-3"
              >
                The Children
              </Link>
              <Link
                to="/tour"
                className="lg:text-white uppercase tracking-widest text-sm block font-bold p-3"
              >
                Tour the Memorial
              </Link>
              <Link
                to="/about"
                className="lg:text-white uppercase tracking-widest text-sm block font-bold p-3"
              >
                About the Memorial
              </Link>
            </div>
            <div className="hidden lg:block mx-4">
              <Link
                to="/visit"
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
