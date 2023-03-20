import React from "react";

export const NavHelp = (props) => {
  return (
    <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200">
      {props.children}
    </div>
  );
};

export const SubNavHelp = (props) => {
  return (
    <div className="relative p-4 text-center text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
      {props.children}
    </div>
  );
};
