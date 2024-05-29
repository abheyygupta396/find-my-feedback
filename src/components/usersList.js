import React, { useState, useEffect } from "react";
import userIcon from "../assets/images/usersIcon.png";
import SelectiveTags from "./Common/Tags";
import { chatsData } from "./Common/sampleData";

function ListUserComponent({}) {
  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {chatsData.map((chat, i) => {
        return <ListUserRows idx={i} />;
      })}
    </div>
  );
}

export default ListUserComponent;

// Users Rows Component:
const ListUserRows = ({ idx }) => {
  return (
    <div
      key={idx}
      className={`flex justify-between items-center cursor-pointer w-100 h-[85px] bg-[#fff] px-3 border-t-3 border-custom-color`}
    >
      <img
        src={userIcon}
        alt="profile_picture"
        className="w-10 h-10 rounded-full mr-4"
      />

      {/* Info container */}
      <div className="flex justify-between w-100 h-100 py-1">
        <div>
          <h2 class="text-base font-semibold">
            Anshul Agrawal {idx == 0 && <SelectiveTags tagName="You" />}
          </h2>
          <p class="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};
