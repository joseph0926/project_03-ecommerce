import React, { useState, useEffect } from "react";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { useSelector } from "react-redux";

const MainNavbar = () => {
  const { amount } = useSelector((state) => state.cart);
  const token = useRouteLoaderData("root");

  const [showNav, setShowNav] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY) {
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
      className={`sticky top-0 z-30 flex w-full items-center justify-between bg-white p-4 transition-transform duration-300`}
    >
      <div className="flex items-center justify-center md:w-1/5">
        <Link to="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <h3>Logo</h3>
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link to="products" className="headerLink">
          Product
        </Link>
        <Link to="about" className="headerLink">
          About
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-8 md:w-1/5">
        <Link to="cart">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              {amount}
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {!token && (
          <Link to="auth">
            <div className="relative cursor-pointer">
              <FiUserPlus size={25} />
            </div>
          </Link>
        )}
        {token && (
          <Form method="post" action="/logout">
            <button type="submit" className="relative cursor-pointer">
              <FiUserMinus size={25} />
            </button>
          </Form>
        )}
      </div>
    </header>
  );
};

export default MainNavbar;
