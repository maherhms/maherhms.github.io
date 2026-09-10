import React from "react";

export const Timeline = ({ children }) => {
  return (
    <div className="relative pl-8 border-l-2 border-[#915EFF]">
      {children}
    </div>
  );
};

export const TimelineItem = ({ date, icon, iconBg, children }) => {
  return (
    <div className="relative mb-12">
      {/* Icon */}
      <div
        className="absolute -left-5 top-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: iconBg }}
      >
        <img src={icon} className="w-6 h-6 object-contain" />
      </div>

      {/* Content */}
      <div className="bg-[#1d1836] p-6 rounded-lg shadow-lg border border-[#232631]">
        <p className="text-secondary text-sm mb-2">{date}</p>
        {children}
      </div>
    </div>
  );
};
