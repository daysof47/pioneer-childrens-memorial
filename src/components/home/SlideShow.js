import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Slide from "./Slide";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      current: 1
    };
  }

  componentDidMount() {
    const images = this.props.images.map((image, index) => {
      return { image: image, position: index };
    });
    this.setState({ images });
  }

  goToPrevSlide = () => {
    const current =
      this.state.current > 1
        ? this.state.current - 1
        : this.state.images.length;
    const images = this.state.images.map(item => {
      if (item.position === 0) {
        return { position: this.state.images.length - 1, image: item.image };
      } else {
        return { position: item.position - 1, image: item.image };
      }
    });
    this.setState({ current });
    this.setState({ images });
  };

  goToNextSlide = () => {
    const current =
      this.state.current < this.state.images.length
        ? this.state.current + 1
        : 1;
    const images = this.state.images.map(item => {
      if (item.position === this.state.images.length - 1) {
        return { position: 0, image: item.image };
      } else {
        return { position: item.position + 1, image: item.image };
      }
    });
    this.setState({ current });
    this.setState({ images });
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            overflow: "hidden"
          }}
        >
          <img
            src={this.props.images[0].image.childImageSharp.fixed.src}
            style={{ visibility: "hidden" }}
            alt=""
          />
          {this.state.images.map((image, i) => (
            <Slide key={i} slide={image} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={this.goToPrevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronLeft size={"1.25em"} />
          </button>
          <div className="font-bold tracking-wide mx-6">
            0{this.state.current}/0{this.state.images.length}
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
