import { Component } from "react";

export class Backtop extends Component {
  render() {
    return (
      <button type="button" id="backtop">
        <div className="text">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <div className="clone">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#EF7C00"
          viewBox="0 0 24 24"
          stroke="#EF7C00"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    );
  }
}

export default Backtop;
