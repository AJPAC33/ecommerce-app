import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Product } from "../components/Product";
import { EcommerceLayout } from "../layout/EcommerceLayout";
import { useState } from "react";
import { Cart } from "../components/Cart";
import { Contact } from "../components/Contact";

export function EcommerceRoutes() {
  const [cart, setCart] = useState([]);
  const [closeState, setCloseState] = useState(true);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState("");

  const handleView = (selectedProduct) => {
    setCloseState(false);
    setDetail([selectedProduct]);
  };

  const existsInCart = (selectedProduct) => {
    return cart
      .map((cartProduct) => cartProduct.id)
      .includes(selectedProduct.id);
  };

  const handleAddToCart = (selectedProduct) => {
    if (existsInCart(selectedProduct)) {
      alert("El producto ya fue agregado al carrito");
    } else {
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
      alert("Producto agregado al carrito");
    }
  };

  return (
    <EcommerceLayout setProduct={setProduct}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              setDetail={setDetail}
              closeState={closeState}
              setCloseState={setCloseState}
              handleAddToCart={handleAddToCart}
              handleView={handleView}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              product={product}
              setProduct={setProduct}
              detail={detail}
              setDetail={setDetail}
              closeState={closeState}
              setCloseState={setCloseState}
              handleAddToCart={handleAddToCart}
              handleView={handleView}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </EcommerceLayout>
  );
}
