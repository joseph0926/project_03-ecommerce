import React from "react";
import { json, useLoaderData } from "react-router-dom";
import API_URL from "../../api-url";
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
  const response = await fetch(API_URL);

  if (!response.ok) {
    return json({ message: "상품 데이터를 불러오는데 실패하였습니다,,," });
  } else {
    const featureProducts = await response.json();
    return featureProducts;
  }
}

export default HomePage;
