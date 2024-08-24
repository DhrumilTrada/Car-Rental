import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/templates/Endpoints/Header"
import Footer from "./components/templates/Endpoints/Footer"

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
