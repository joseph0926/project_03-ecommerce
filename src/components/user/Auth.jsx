import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthForm from "./AuthForm";

const Auth = () => {
  const [formBoxActvie, setFormBoxActvie] = useState(false);
  const activeHandler = () => {
    setFormBoxActvie(true);
  };
  const inactiveHandler = () => {
    setFormBoxActvie(false);
  };

  return (
    <div className="relative w-[800px] h-[500px] m-4 flex justify-center items-center">
      <div className="absolute top-[40px] w-full h-[420px] flex justify-center items-center bg-black/20 shadow-[0 5px 45px rgba(0, 0, 0, 0.15)]">
        <div className="relative w-[50%] h-full flex flex-col justify-center">
          <h2 className="text-white font-semibold text-xl mb-[10px]">이미 회원이시라면, 로그인해주세요!</h2>
          <Link
            to="?mode=signInWithPassword"
            className="cursor-pointer p-[10px 20px] bg-white text-zinc-800 font-semibold text-lg"
            onClick={inactiveHandler}
          >
            로그인
          </Link>
        </div>
        <div className="relative w-[50%] h-full flex flex-col justify-center">
          <h2 className="text-white font-semibold text-xl mb-[10px]">회원이 아니신가요? 회원가입해주세요!</h2>
          <Link
            to="?mode=signUp"
            className="cursor-pointer p-[10px 20px] bg-white text-zinc-800 font-semibold text-lg"
            onClick={activeHandler}
          >
            회원가입
          </Link>
        </div>
      </div>
      <div
        className={`${
          formBoxActvie
            ? "absolute top-0 left-0 w-[50%] h-full z-10 flex justify-center items-center shadow-[0 5px 45px rgba(0, 0, 0, 0.25)] transition-all duration-500 ease-in-out left-[50%]"
            : "absolute top-0 left-0 w-[50%] h-full z-10 flex justify-center items-center shadow-[0 5px 45px rgba(0, 0, 0, 0.25)] transition-all duration-500 ease-in-out "
        }`}
      >
        {/* <AuthForm /> */}
        <div className="h-[300px] w-[300px]"></div>
      </div>
    </div>
  );
};

export default Auth;
