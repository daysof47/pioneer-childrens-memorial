import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Img from "gatsby-image";

class SlideShow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSlide: 0
    };
  }

  goToPrevSlide = () => {
    const visibleSlide =
      this.state.visibleSlide === 0
        ? this.props.images.length - 1
        : this.state.visibleSlide - 1;

    this.setState({ visibleSlide });
  };

  goToNextSlide = () => {
    const visibleSlide =
      this.state.visibleSlide === this.props.images.length - 1
        ? 0
        : this.state.visibleSlide + 1;

    this.setState({ visibleSlide });
  };

  render() {
    return (
      <div>
        <div className="">
          <Img
            fluid={
              this.props.images[this.state.visibleSlide].image.childImageSharp
                .fluid
            }
          />
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={this.goToPrevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronLeft size={"1.25em"} />
          </button>
          <div className="tracking-wide mx-6">
            0{this.state.visibleSlide + 1}/0{this.props.images.length}
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

export default SlideShow2;
