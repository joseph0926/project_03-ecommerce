import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import Product from "../components/Products/Product";
import Loading from "../components/UI/Loading";

const ProductDetailPage = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>
        {(loadedProducts) => <Product product={loadedProducts} />}
      </Await>
    </Suspense>
  );
};

export default ProductDetailPage;
