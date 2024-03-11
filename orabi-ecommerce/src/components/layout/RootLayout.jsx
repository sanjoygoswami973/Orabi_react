import React from "react";
import Navber from "../Navber";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <Navber />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
