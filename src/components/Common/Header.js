import React from "react";
import logo from "../../assets/tacnique-logo.svg";
import profileIcon from "../../assets/images/profileIcon.png";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between h-[60px] p-3 shadow-md bg-white z-10">
      <div className="text-2xl font-bold text_primary shrink-0 pl-10">
        <div className="text_primary h-8 ">
          <img src={logo} className="App-logo h-8" alt="logo" />
        </div>
      </div>
      <div className="pr-10">
        <img
          src={profileIcon}
          alt="profile_picture"
          className="w-10 h-10 rounded-full mr-4"
        />
      </div>
    </div>
  );
}
