import React from "react";
import {
  Link,
  Form,
  useActionData,
  useSearchParams,
  useNavigation,
} from "react-router-dom";
import useInput from "../../hooks/use-input";
import Loading from "../UI/Loading";

import styles from "./AuthForm.module.css";

const AuthForm = (props) => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signInWithPassword";
  const isSubmitting = navigation.state === "submitting";

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

  const emailInputclasses = emailInputHasError
    ? `${styles["input-box"]} ${styles.invalid}`
    : styles["input-box"];
  const passwordInputclasses = passwordInputHasError
    ? `${styles["input-box"]} ${styles.invalid}`
    : styles["input-box"];

  return (
    <div className={styles.form}>
      <h2 className={styles.text}>{isLogin ? "로그인" : "회원가입"}</h2>
      <Form method="post">
        {data && data.errors && (
          <ul className={styles.error}>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p className={styles.error}>{data.message}</p>}
        <div className={emailInputclasses}>
          <input
            type="email"
            name="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          <span>Email</span>
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
          <div className={styles.sub}>
            <Link>비밀번호 찾기</Link>
          </div>
        )}
        {!isLogin && <div className={styles.dummy}></div>}
        <button disabled={isSubmitting} className={styles.btn}>
          {isSubmitting ? <Loading /> : isLogin ? "로그인" : "회원가입"}
        </button>
      </Form>
    </div>
  );
};

export default AuthForm;
