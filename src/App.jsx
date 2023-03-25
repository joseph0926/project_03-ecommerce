import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/root";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as mainProductsLoader } from "./pages/HomePage";
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage";
import ProductCategory, {
  loader as categoryLoader,
} from "./pages/ProductCategory";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import { action as logoutAction } from "./pages/Logout";
import AboutPage from "./pages/AboutPage";
import { tokenLoader, checkAuthLoader } from "./components/helpers/auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      errorElement: <ErrorPage />,
      loader: tokenLoader,
      children: [
        { index: true, element: <HomePage />, loader: mainProductsLoader },
        {
          path: "products",
          // element: <ProductsPage />,
          id: "products",
          loader: productsLoader,
          children: [
            {
              path: ":productId",
              element: <ProductDetailPage />,
            },
          ],
        },
        {
          path: "cart",
          element: <CartPage />,
          loader: checkAuthLoader,
        },
        { path: "auth", element: <AuthPage />, action: authAction },
        { path: "about", element: <AboutPage /> },
        { path: "logout", action: logoutAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
