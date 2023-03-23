import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import API_URL from "../../api-url";
import Products from "../components/Products/Products";
import Loading from "../components/UI/Loading";

const ProductsPage = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>{(loadedProducts) => <Products products={loadedProducts} />}</Await>
    </Suspense>
  );
};

async function loadProducts() {
  let response;

  if (response || !response?.status === 522) {
    response = await fetch(API_URL);
  } else {
    response = await fetch("https://mocki.io/v1/763ddd71-00ce-4ee8-963b-e49eec513b11");
  }

  if (!response.ok) {
    return json({ message: "상품 데이터를 불러오는데 실패하였습니다,,," }, { status: 500 });
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
