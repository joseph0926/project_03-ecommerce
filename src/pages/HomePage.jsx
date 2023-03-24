import React, { Suspense } from "react";
import { json, useLoaderData, Await, defer } from "react-router-dom";
import API_URL from "../../api-url";
import { fulfillWithTimeLimit } from "../components/helpers/ApiHelp";
import Home from "../components/Home/Home";
import Loading from "../components/UI/Loading";

const HomePage = () => {
  const { featureProducts } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={featureProducts}>
        {(loadedProducts) => <Home featureProducts={loadedProducts} />}
      </Await>
    </Suspense>
  );
};

async function loadeFeatureProducts() {
  let timeLimit = 1000;
  let failureValue = null;
  let data = await fulfillWithTimeLimit(
    timeLimit,
    fetch(API_URL),
    failureValue
  );

  let response;
  if (data === null) {
    response = await fetch(
      "https://mocki.io/v1/5b3b1257-f7ae-4bfa-abdd-fbcce5b6cb7f"
    );
  } else {
    response = await fetch(API_URL);
  }

  if (!response.ok) {
    return json({ message: "상품 데이터를 불러오는데 실패하였습니다,,," });
  } else {
    const featureProducts = await response.json();
    return featureProducts;
  }
}

export function loader() {
  return defer({
    featureProducts: loadeFeatureProducts(),
  });
}

export default HomePage;
