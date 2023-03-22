import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/root";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as featureProductsLoader } from "./pages/HomePage";
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage";
import ProductCategory from "./pages/ProductCategory";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />, loader: featureProductsLoader },
        { path: "products", element: <ProductsPage />, loader: productsLoader },
        { path: "products/:productId", element: <ProductDetailPage /> },
        { path: "category/:productItem", element: <ProductCategory /> },
        { path: ":userId/cart", element: <CartPage /> },
        { path: "auth", element: <AuthPage />, action: authAction },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
