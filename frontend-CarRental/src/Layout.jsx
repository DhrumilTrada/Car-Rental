import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
