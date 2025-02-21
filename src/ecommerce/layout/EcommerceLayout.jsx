import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function EcommerceLayout({ children, setProduct }) {
  const searchBtn = (product) => {
    setProduct(product);
  };
  return (
    <div className="block">
      <NavBar searchBtn={searchBtn} />
      {children}
      <Footer />
    </div>
  );
}
