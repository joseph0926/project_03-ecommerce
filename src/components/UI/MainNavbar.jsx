import React, { useState } from "react";
import { CartIcon } from "../helpers/Icons";
import { NavHelp, SubNavHelp } from "../helpers/NavHelp";

const MainNavbar = () => {
  const [open, setOpen] = useState("group");
  const groupOpenHandler = () => {
    if (open === "group open") {
      setOpen("group");
    } else {
      setOpen("group open");
    }
  };

  return (
    <header className="text-zinc-200">
      <nav className="sticky top-0 z-10 flex bg-gradient-to-r from-black to-gray-500">
        <div className="flex items-center gap-2 p-2">
          <div className="text-2xl font-bold">
            E-<span className="text-sky-500">Commerce</span>
          </div>
        </div>
        <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
          <div className={`${open} peer`} onClick={groupOpenHandler}>
            <div className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 transition-all group-open:opacity-0"></div>
            <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
          </div>
          <div className="absolute top-[48px] left-0 hidden w-full bg-gradient-to-r from-black to-gray-500 peer-open:block">
            <div
              className={`group relative h-full cursor-pointer text-pink-200 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200`}
            >
              <div className="p-4 text-center font-bold">Products</div>
              <div className="hidden group-hover:block">
                <SubNavHelp>
                  <span>패션</span>
                </SubNavHelp>
                <SubNavHelp>
                  <span>액세서리</span>
                </SubNavHelp>
                <SubNavHelp>
                  <span>디지털</span>
                </SubNavHelp>
              </div>
            </div>
            <NavHelp>
              <div className="relative block">
                <div className="flex gap-2">
                  Cart <CartIcon></CartIcon>
                </div>
                <div className="absolute -top-4 -right-4 w-7 h-7 rounded-[50%] flex justify-center items-center bg-zinc-700">
                  <p className="mb-0 text-lg text-sky-700">0</p>
                </div>
              </div>
            </NavHelp>
            <NavHelp>
              <div>Login / Signup</div>
            </NavHelp>
            <NavHelp>
              <div>About</div>
            </NavHelp>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
