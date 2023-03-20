import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductItems from "./pages/ProductItems";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:productId", element: <ProductDetailPage /> },
        { path: "category/:productItem", element: <ProductItems /> },
        { path: ":userId/cart", element: <CartPage /> },
        { path: "auth", element: <AuthPage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
