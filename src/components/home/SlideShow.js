import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Img from "gatsby-image";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSlides: [0, 1, 2]
    };
  }

  goToPrevSlide = () => {
    const visibleSlides = this.state.visibleSlides.map(number => {
      if (number === 0) {
        return this.props.images.length - 1;
      } else {
        return number - 1;
      }
    });
    this.setState({ visibleSlides });
  };

  goToNextSlide = () => {
    const visibleSlides = this.state.visibleSlides.map(number => {
      if (number === this.props.images.length - 1) {
        return 0;
      } else {
        return number + 1;
      }
    });
    this.setState({ visibleSlides });
  };

  render() {
    return (
      <div>
        <div className="flex items-center justify-center">
          <div className="hidden lg:block w-1/4 p-3">
            <Img
              fluid={
                this.props.images[this.state.visibleSlides[0]].image
                  .childImageSharp.fluid
              }
            />
          </div>
          <div className="w-full lg:w-1/2 p-3">
            <Img
              fluid={
                this.props.images[this.state.visibleSlides[1]].image
                  .childImageSharp.fluid
              }
            />
          </div>
          <div className="hidden lg:block w-1/4 p-3">
            <Img
              fluid={
                this.props.images[this.state.visibleSlides[2]].image
                  .childImageSharp.fluid
              }
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={this.goToPrevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronLeft size={"1.25em"} />
          </button>
          <div className="tracking-wide mx-6">
            0{this.state.visibleSlides[0] + 1}/0{this.props.images.length}
          </div>
          <button
            onClick={this.goToNextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronRight size={"1.25em"} />
          </button>
        </div>
      </div>
    );
  }
}

export default SlideShow;
