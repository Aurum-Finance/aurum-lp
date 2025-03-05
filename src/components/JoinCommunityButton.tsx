import React from "react";

const JoinCommunity = ({ text = "Join Community", href = "#" }) => {
  return (
    <a
      href={href}
      className="
        relative
        w-[242px]
        h-[56px]
        inline-flex
        items-center
        justify-center
        text-2xl
        font-instrument
        italic
        text-white
        complex-button
        group
      "
    >
      {/* <div className="shine"></div> */}
      <span className="relative z-10">{text}</span>
    </a>
  );
};


export default JoinCommunity;
