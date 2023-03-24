import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import API_URL from "../../api-url";
import { fulfillWithTimeLimit } from "../components/helpers/ApiHelp";
import Products from "../components/Products/Products";
import Loading from "../components/UI/Loading";

const ProductsPage = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>
        {(loadedProducts) => <Products products={loadedProducts} />}
      </Await>
    </Suspense>
  );
};

async function loadProducts() {
  let timeLimit = 1000;
  let failureValue = null;
  let data = await fulfillWithTimeLimit(
    timeLimit,
    fetch(API_URL),
    failureValue
  );

  let response;
  if (data === null) {
    console.log("asdf");
    response = await fetch(
      "https://mocki.io/v1/5b3b1257-f7ae-4bfa-abdd-fbcce5b6cb7f"
    );
  } else {
    console.log("qwer");
    response = await fetch(API_URL);
  }

  if (!response.ok) {
    return json(
      { message: "상품 데이터를 불러오는데 실패하였습니다,,," },
      { status: 500 }
    );
  } else {
    const resDate = await response.json();
    return resDate;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}

export default ProductsPage;
