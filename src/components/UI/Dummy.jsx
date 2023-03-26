import React from "react";
import { Link } from "react-router-dom";

const Dummy = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="mb-[2rem] text-gray-500">준비중입니다,,,</h1>
      <Link to="/" className="btn">
        메인화면으로 돌아가기
      </Link>
    </div>
  );
};

export default Dummy;
