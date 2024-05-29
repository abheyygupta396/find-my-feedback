import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import logo from "../assets/tacnique-logo.svg";

function ProgressBarComponent({ progress }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] w-screen h-screen">
      <div className="text-2xl font-bold text_primary shrink-0">
        <div className="text_primary h-8 ">
          <img src={logo} className="App-logo h-8" alt="logo" />
        </div>
      </div>

      {/* Loading bar and text */}
      <div className="flex flex-col justify-evenly items-center h-[150px]">
        <ProgressBar
          variant="#123445"
          now={progress}
          className="bg-[#243138] rounded-lg w-[320px] h-[3px]"
        />

        {/* Text section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center text-[#687782]">
            <p>Find My Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarComponent;
