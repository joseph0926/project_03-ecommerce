import React, { Suspense } from "react";
import { useLoaderData, Await, defer, json } from "react-router-dom";
import { fulfillWithTimeLimit } from "../components/helpers/ApiHelp";
import Category from "../components/Products/Category";
import Loading from "../components/UI/Loading";
import API_URL from "../../api-url";

const ProductCategory = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>{(loadedProducts) => <Category products={loadedProducts} />}</Await>
    </Suspense>
  );
};

async function loadeProducts() {
  let timeLimit = 1000;
  let failureValue = null;
  let data = await fulfillWithTimeLimit(timeLimit, fetch(API_URL), failureValue);

  let response;
  if (data === null) {
    response = await fetch("https://mocki.io/v1/5b3b1257-f7ae-4bfa-abdd-fbcce5b6cb7f");
  } else {
    response = await fetch(API_URL);
  }

  if (!response.ok) {
    return json({ message: "상품 데이터를 불러오는데 실패하였습니다,,," });
  } else {
    const products = await response.json();
    return products;
  }
}

export function loader() {
  return defer({
    products: loadeProducts(),
  });
}

export default ProductCategory;
