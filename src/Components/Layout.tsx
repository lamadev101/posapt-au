/** @format */

import React from "react";
import ErrorResult from "./ErrorResult";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Result from "./Result";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Result />
      <ErrorResult />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
