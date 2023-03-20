import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
