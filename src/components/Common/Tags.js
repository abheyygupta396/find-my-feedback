import React from "react";

export default function SelectiveTags({ tagName = "" }) {
  return (
    <span
      className={`mr-1 mb-1 mt-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#ebf3ffcc] text-[#42bbe4]`}
    >
      {tagName}
    </span>
  );
}
