import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../components/UI/MainNavbar";

const Root = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default Root;
