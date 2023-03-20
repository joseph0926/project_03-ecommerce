import React from "react";
import { Link } from "react-router-dom";

export const NavHelp = (props) => {
  return (
    <Link
      to={props.menu}
      className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-zinc-300 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-100"
    >
      {props.children}
    </Link>
  );
};

export const SubNavHelp = (props) => {
  return (
    <Link
      to={`/category/${props.category}`}
      className="relative p-4 text-center text-zinc-300 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-100"
    >
      {props.children}
    </Link>
  );
};

export const MenuItem = (props) => {
  return (
    <Link
      to={props.menu}
      className="relative text-xl flex h-full cursor-pointer items-center p-4 font-bold text-zinc-300 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200"
    >
      {props.children}
    </Link>
  );
};

export const SubMenuItem = (props) => {
  return (
    <Link
      to={`/category/${props.category}`}
      className="cursor-pointer p-4 font-bold text-zinc-300 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-50"
    >
      {props.children}
    </Link>
  );
};

export const MobileIcon = () => {
  return (
    <>
      <div className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
      <div className="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 transition-all group-open:opacity-0"></div>
      <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
    </>
  );
};
