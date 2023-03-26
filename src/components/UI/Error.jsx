import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-500 text-6xl">404 Error!</h1>
      <h3 className="mb-[2rem]">에러가 발생하였습니다 ㅜㅜ</h3>
      <Link to="/" className="btn">
        메인화면으로 돌아가기
      </Link>
    </div>
  );
};

export default Error;
