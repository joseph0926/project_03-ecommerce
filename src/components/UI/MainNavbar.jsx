import React, { useState, useEffect } from "react";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const MainNavbar = () => {
  const token = useRouteLoaderData("root");

  const [showNav, setShowNav] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <header
      className={`sticky top-0 z-30 flex w-full items-center justify-between bg-white p-4 transition-transform duration-500 `}
    >
      <div className="flex items-center justify-center md:w-1/5">
        {/* <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <h3>Logo</h3>
          </div>
        </Link> */}
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link to="products" className="headerLink">
          Product
        </Link>
        <Link to="about" className="headerLink">
          About
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              0
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default MainNavbar;
