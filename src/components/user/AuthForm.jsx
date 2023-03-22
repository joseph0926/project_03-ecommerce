import React from "react";
import { Link, Form, useActionData, useSearchParams } from "react-router-dom";

import useInput from "../../hooks/use-input";

const AuthForm = () => {
  const data = useActionData();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signInWithPassword";

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    return value.trim() !== "" && value.includes("@");
  });
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueInputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => {
    return value.trim() !== "" && value.length >= 6;
  });

  let formIsInValid = true;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsInValid = false;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
  };

  const emailInputclasses = emailInputHasError ? "relative w-[300px] mt-[35px] group" : "relative w-[300px] mt-[35px]";
  const passwordInputclasses = passwordInputHasError ? `${styles["input-box"]} ${styles.invalid}` : styles["input-box"];

  return (
    <div className="w-full h-full inset-2 rounded-[8px] bg-zinc-300 z-10 p-[50px 40px] flex flex-col">
      <h2 className="text-black font-bold text-center">{isLogin ? "로그인" : "회원가입"}</h2>
      <Form method="post">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className={emailInputclasses}>
          <input
            type="email"
            name="email"
            id="meail"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className="relative w-full p-[20px 10px 10px] bg-transparent border-none outline-none text-base text-black peer"
          ></input>
          <span className="absolute left-0 p-[20px 10px 10px] text-black pointer-events-none transition-all duration-75 peer-focus:text-sky-200 peer-focus:translate-x-[-10px] translate-y-[-40px] group: ">
            Email
          </span>
          <i></i>
        </div>
        <div className={passwordInputclasses}>
          <input
            type="password"
            name="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
          <span>Password</span>
          <i></i>
        </div>
        {isLogin && (
          <div className="flex justify-end mt-[2rem] mr-[1rem]">
            <Link className="m-[10px 0] text-sm">비밀번호 찾기</Link>
          </div>
        )}
        {!isLogin && <div className="block mt-[4.7em]"></div>}
        <button disabled={formIsInValid}>{isLogin ? "로그인" : "회원가입"}</button>
      </Form>
    </div>
  );
};

export default AuthForm;
