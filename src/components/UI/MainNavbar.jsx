import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../helpers/Icons";
import { MenuItem, MobileIcon, NavHelp, SubMenuItem, SubNavHelp } from "../helpers/NavHelp";

import { FaUserPlus } from "react-icons/fa";

const MainNavbar = () => {
  const [open, setOpen] = useState("group");
  const [showNav, setShowNav] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const groupOpenHandler = () => {
    if (open === "group open") {
      setOpen("group");
    } else {
      setOpen("group open");
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShowNav("-translate-y-[80px]");
      } else {
        setShowNav("shdow-sm");
      }
    } else {
      setShowNav("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className="text-zinc-200 sticky top-0 z-20">
      <nav className={`w-full h-[5rem] flex bg-gradient-to-r from-black to-gray-500 ${showNav} transition-transform duration-300 `}>
        <div className="flex items-center gap-2 p-4">
          <Link to="/" className="text-3xl font-bold">
            E-<span className="text-sky-500">Commerce</span>
          </Link>
        </div>
        <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
          <div className={`${open} peer`} onClick={groupOpenHandler}>
            <MobileIcon></MobileIcon>
          </div>
          <div className="absolute top-[62px] left-0 hidden w-full bg-gradient-to-r from-black to-gray-500 peer-open:block">
            <div
              className={`group relative h-full cursor-pointer text-zinc-300 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200`}
            >
              <Link to="/products" className="p-4 text-center font-bold block">
                Products
              </Link>
              <div className="hidden group-hover:flex flex-col">
                <SubNavHelp category={"fa"}>
                  <span>패션</span>
                </SubNavHelp>
                <SubNavHelp category={"ac"}>
                  <span>액세서리</span>
                </SubNavHelp>
                <SubNavHelp category={"di"}>
                  <span>디지털</span>
                </SubNavHelp>
              </div>
            </div>
            <NavHelp menu={`cart`}>
              <div className="relative block">
                <div className="flex gap-2">
                  Cart <CartIcon></CartIcon>
                </div>
                <div className="absolute -top-4 -right-4 w-7 h-7 rounded-[50%] flex justify-center items-center bg-zinc-700">
                  <p className="mb-0 text-lg text-sky-700">0</p>
                </div>
              </div>
            </NavHelp>
            <NavHelp menu={"about"}>
              <div>About</div>
            </NavHelp>
            <NavHelp menu={"auth"}>
              <div>Login</div>
            </NavHelp>
          </div>
        </div>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <div className="group text-xl relative flex h-full cursor-pointer items-center p-4 font-bold text-zinc-300 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200">
            <span>Products</span>
            <div className="absolute top-full right-0 hidden w-full whitespace-nowrap rounded-b-md bg-gray-500 text-right group-hover:flex flex-col">
              <SubMenuItem category={"fa"}>
                <span>패션</span>
              </SubMenuItem>
              <SubMenuItem category={"ac"}>
                <span>액세서리</span>
              </SubMenuItem>
              <SubMenuItem category={"di"}>
                <span>디지털</span>
              </SubMenuItem>
            </div>
          </div>
          <MenuItem menu={`cart`}>
            <span className="mr-2">Cart</span> <CartIcon></CartIcon>
          </MenuItem>
          <MenuItem menu={"about"}>
            <span>About</span>
          </MenuItem>
          <MenuItem menu={"auth"}>
            <span className="mr-2">Login</span> <FaUserPlus></FaUserPlus>
          </MenuItem>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
