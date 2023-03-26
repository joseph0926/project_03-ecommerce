import React from "react";
import { json, redirect } from "react-router-dom";

import Auth from "../components/user/Auth";

const API_KEY = import.meta.env.VITE_API_KEY;

const AuthPage = () => {
  return <Auth />;
};

export async function action({ request, params }) {
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get("mode") || "signInWithPassword";

  if (mode !== "signInWithPassword" && mode !== "signUp") {
    return json({ message: "지원하지 않는 기능입니다" });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    returnSecureToken: true,
  };

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 400) {
    return json({
      message: "로그인/회원가입에 오류가 발생하였습니다, 다시 시도해주세요!",
    });
  }
  if (!response.ok) {
    return json({ message: "사용자 인증 불가" });
  }

  const resData = await response.json();
  const token = resData.idToken;

  console.log(resData);

  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/");
}

export default AuthPage;
