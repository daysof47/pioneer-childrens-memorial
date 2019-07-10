import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const chunk = (arr, size) =>
  arr.reduce(
    (chunks, el, i) =>
      (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el])) &&
      chunks,
    []
  );

class NamesSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSlide: 0
    };
    this.chunks = [];
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.chunks = [];
  }

  getKey() {
    return this.keyCount++;
  }

  goToPrevSlide = () => {
    const visibleSlide =
      this.state.visibleSlide === 0
        ? this.chunks.length - 1
        : this.state.visibleSlide - 1;

    this.setState({ visibleSlide });
  };

  goToNextSlide = () => {
    const visibleSlide =
      this.state.visibleSlide === this.chunks.length - 1
        ? 0
        : this.state.visibleSlide + 1;

    this.setState({ visibleSlide });
  };

  controls() {
    if (this.chunks.length > 1) {
      return (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={this.goToPrevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronLeft size={"1.25em"} />
          </button>
          <div className="tracking-wide mx-6">
            0{this.state.visibleSlide + 1}/0{this.chunks.length}
          </div>
          <button
            onClick={this.goToNextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-solid border-green border-2 text-center text-green"
          >
            <FaChevronRight size={"1.25em"} />
          </button>
        </div>
      );
    }
  }

  render() {
    this.chunks = chunk(this.props.names, 25);
    return (
      <div>
        <div>
          {this.chunks.map((chunk, index) => (
            <div
              key={this.getKey()}
              className="leading-loose text-center"
              style={{
                display: index === this.state.visibleSlide ? "block" : "none"
              }}
            >
              {chunk.map(name => (
                <span key={this.getKey()} className="inline-block mx-3">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
        <hr className="border-gray-200 border-b my-8 mx-auto max-w-md" />
        {this.controls()}
      </div>
    );
  }
}

export default NamesSlider;
