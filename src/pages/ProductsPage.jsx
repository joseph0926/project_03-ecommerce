import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import API_URL from "../../api-url";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading,,,</p>}>
      <Await resolve={products}>
        {(loadedProducts) => <Products products={loadedProducts} />}
      </Await>
    </Suspense>
  );
};

async function loadProducts() {
  const response = await fetch(API_URL);

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
