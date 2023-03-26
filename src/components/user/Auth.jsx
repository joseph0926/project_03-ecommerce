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
    <div className="sign-container">
      <div className="sign-content">
        <div className="sign-header">
          <h2>이미 회원이시라면, 로그인해주세요!</h2>
          <Link
            to="?mode=signInWithPassword"
            className="sign-btn"
            onClick={inactiveHandler}
          >
            로그인
          </Link>
        </div>
        <div className="sign-header">
          <h2>회원이 아니신가요? 회원가입해주세요!</h2>
          <p className="text-red-500 text-lg font-bold">
            테스트를 원하시는분은 <br />
            Id: test@test.com
            <br />
            Pw: 123456 <br />
            이용해주세요!
          </p>
          <Link to="?mode=signUp" className="sign-btn" onClick={activeHandler}>
            회원가입
          </Link>
        </div>
      </div>
      <div
        className={`${formBoxActvie ? "sign-formBox active" : "sign-formBox"}`}
      >
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
