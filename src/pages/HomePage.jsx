import React from "react";
import { json, useLoaderData } from "react-router-dom";
import API_URL from "../../api-url";
import { fulfillWithTimeLimit } from "../components/helpers/ApiHelp";
import Home from "../components/Home/Home";

const HomePage = () => {
  const featureProducts = useLoaderData();

  return (
    <>
      <Home featureProducts={featureProducts} />
    </>
  );
};

export async function loader() {
  let timeLimit = 1000;
  let failureValue = null;
  let data = await fulfillWithTimeLimit(timeLimit, fetch(API_URL), failureValue);

  let response;
  if (data === null) {
    console.log("asdf");
    response = await fetch("https://mocki.io/v1/5b3b1257-f7ae-4bfa-abdd-fbcce5b6cb7f");
  } else {
    console.log("qwer");
    response = await fetch(API_URL);
  }

  if (!response.ok) {
    return json({ message: "상품 데이터를 불러오는데 실패하였습니다,,," });
  } else {
    const featureProducts = await response.json();
    return featureProducts;
  }
}

export default HomePage;
