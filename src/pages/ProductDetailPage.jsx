import React, { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";

import Product from "../components/Products/Product";
import Loading from "../components/UI/Loading";

const ProductDetailPage = () => {
  const { products } = useLoaderData();
  const params = useParams();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>{(loadedProducts) => <Product productId={params.productId} product={loadedProducts} />}</Await>
    </Suspense>
  );
};

export default ProductDetailPage;
