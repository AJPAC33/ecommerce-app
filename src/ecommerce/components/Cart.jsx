import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Cart = ({ cart, setCart }) => {
  const h3Refs = useRef([]);
  const [maxWidth, setMaxWidth] = useState("auto");

  useLayoutEffect(() => {
    if (h3Refs.current.length > 0) {
      const widths = h3Refs.current.map((el) => el?.offsetWidth || 0);
      setMaxWidth(Math.max(...widths));
    }
  }, [cart]);

  const existsInCart = (selectedProduct) => {
    return cart
      .map((cartProduct) => cartProduct.id)
      .includes(selectedProduct.id);
  };

  const handleIncrementQty = (selectedProduct) => {
    if (existsInCart(selectedProduct)) {
      setCart(
        cart.map((cartProduct) =>
          cartProduct.id === selectedProduct.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        )
      );
    }
  };

  const handleDecrementQty = (selectedProduct) => {
    if (existsInCart(selectedProduct)) {
      setCart(
        cart.map((cartProduct) =>
          cartProduct.id === selectedProduct.id
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct
        )
      );
    }
  };

  const handleRemoveCartProduct = (selectedProduct) => {
    if (selectedProduct.quantity > 0) {
      setCart(
        cart.filter((cartProduct) => cartProduct.id !== selectedProduct.id)
      );
    }
  };

  const totalPrice = cart.reduce(
    (price, cartProduct) => price + cartProduct.quantity * cartProduct.price,
    0
  );

  return (
    <>
      <div className="flex justify-center py-[40px] px-0 md:px-[50px] bg-[#f1f1f1] border-b-[#9a9a9a]">
        {cart.length === 0 ? (
          <div className="flex flex-col w-[300px] items-center mt-[30px]">
            <h2 className="w-[220px] text-[32px] text-[#010f1c] uppercase font-light mb-[30px]">
              Carrito vacio
            </h2>
            <Link
              className="w-[172px] mt-[30px] decoration-0 text-[#fff] py-[10px] px-[20px] bg-[#010f1c]"
              to="/product"
            >
              Seguir comprando
            </Link>
          </div>
        ) : (
          <div className="flex flex-col justify-center px-0 md:px-[30px]">
            {cart.map((selectedCartProduct, index) => {
              const { id, title, thumbnail, price, category, quantity } =
                selectedCartProduct;
              return (
                <div
                  className="flex m-[20px] py-[20px] px-[30px] bg-[#fff] rounded-xl mt-[10px] mb-[10px]"
                  key={id}
                >
                  <div className="hidden md:block py-[20px] px-[20px] bg-[#f1f1f1]">
                    <img
                      className="w-[250px] h-[250px]"
                      src={thumbnail}
                      alt={title}
                    />
                  </div>
                  <div className="flex justify-center items-center py-[20px] px-[30px]">
                    <div style={{ width: `${maxWidth}px` }}>
                      <h4 className="w-fit uppercase text-[16px] text-[#9a9a9a] font-thin tracking-[1.5px]">
                        {category}
                      </h4>
                      <h3
                        className="w-fit mt-[20px] text-[#010f1c] text-[22px] font-extralight tracking-[1px]"
                        ref={(el) => (h3Refs.current[index] = el)}
                      >
                        {title}
                      </h3>
                      <p className="w-fit mt-[10px] text-[#010f1c] tracking-[1px]">
                        Precio: S/{price}
                      </p>
                      <div className="flex w-fit mt-[10px]">
                        <button
                          className="p-[10px] bg-none outline-none border-none text-[#0989ff] text-[32px] cursor-pointer"
                          onClick={() =>
                            handleIncrementQty(selectedCartProduct)
                          }
                        >
                          +
                        </button>
                        <input
                          className="border-none outline-none bg-none text-[22px] text-[#010f1c] w-[50px] text-center"
                          type="text"
                          value={quantity}
                          readOnly
                        />
                        <button
                          className="p-[10px] bg-none outline-none border-none text-[#0989ff] text-[32px] cursor-pointer"
                          onClick={() =>
                            handleDecrementQty(selectedCartProduct)
                          }
                        >
                          -
                        </button>
                      </div>
                      <h4 className="w-fit text-[#010f1c] text-[22px] mt-[10px]">
                        Sub total: S/ {price * quantity}
                      </h4>
                    </div>
                    <div className="ml-[50px]">
                      <button
                        className=" border-none outline-none text-[22px] text-[#db0045] bg-none cursor-pointer"
                        onClick={() =>
                          handleRemoveCartProduct(selectedCartProduct)
                        }
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-[30px] w-fit text-[22px] uppercase tracking-[1px]">
                Total: S/ {(Math.round(totalPrice * 10) / 10).toFixed(2)}
              </h2>
              <button className="mt-[40px] py-[10px] px-[20px] text-[#fff] border-none outline-none bg-[#0989ff] cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
