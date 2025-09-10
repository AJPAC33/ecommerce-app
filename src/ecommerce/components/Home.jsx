import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

import { Link } from "react-router-dom";
import {
  useCategories,
  useFirstProductsByCategory,
  useProductsByCategory,
  useProductSearchByCategory,
  useRandomProductName,
} from "../../hooks/customHooks";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { imageBanner } from "../../assets";

export function Home({
  detail,
  closeState,
  setCloseState,
  handleView,
  handleAddToCart,
  handleNotLoggedIn,
}) {
  const { status } = useSelector((state) => state.auth);
  const modalRef = useRef();
  const categories = useCategories();
  const randomProductName = useRandomProductName();
  const { category: selectedCategory } = categories[0];
  const firstProducts = useFirstProductsByCategory(
    Array.isArray(selectedCategory) ? selectedCategory : [selectedCategory]
  );
  const products = useProductsByCategory(selectedCategory);
  const searchedProductsByCategory =
    useProductSearchByCategory(randomProductName);
  const mostExpensiveProduct =
    searchedProductsByCategory.length > 0
      ? searchedProductsByCategory.reduce(
          (maxProduct, currentProduct) =>
            currentProduct.price > maxProduct.price
              ? currentProduct
              : maxProduct,
          searchedProductsByCategory[0]
        )
      : null;
  const { title, price, thumbnail } = mostExpensiveProduct ?? {};

  const handleClose = () => {
    setCloseState(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !closeState &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeState]);

  return (
    <>
      {!closeState ? (
        <div className="flex justify-center items-center  py-[30px] px-[40px] fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.24)] z-1">
          <div
            className="relative xl:w-[1000px] h-[600px] sm:w-[500px] bg-[#fff] py-[20px] px-[30px] rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
            ref={modalRef}
          >
            <button
              className="absolute right-0 top-0 m-[15px] border-none outline-none bg-none text-[22px] cursor-pointer"
              onClick={() => handleClose()}
            >
              <AiOutlineCloseCircle />
            </button>

            {detail.map((selectedProduct) => {
              const { id, title, thumbnail, price, category, description } =
                selectedProduct;
              return (
                <div
                  className="flex flex-col items-center max-w-[100%] py-[20px] px-[30px]"
                  key={id}
                >
                  <div className="py-[10px] px-[20px] w-[200px] h-[200px] bg-[#f1f1f1]">
                    <img src={thumbnail} alt={title} />
                  </div>
                  <div className="ml-[30px] mt-[15px]">
                    <h4 className="uppercase text-[14px] font-extralight text-[#9a9a9a] tracking-widest">
                      {category}
                    </h4>
                    <h2 className="text-[22px] text-[#010f1c] capitalize tracking-widest">
                      {title}
                    </h2>
                    <p className="text-[#4a4a4a]">{description}</p>
                    <h3 className="text-[#010f1c] text-[22px] tracking-widest">
                      {price}
                    </h3>
                    {status === "authenticated" ? (
                      <button
                        className="text-[18px] text-[#fff] bg-[#010f1c] py-[5px] px-[10px] transition duration-200 border-none outline-none cursor-pointer hover:bg-[#0989ff]"
                        onClick={() => handleAddToCart(selectedProduct)}
                      >
                        Agregar al carrito
                      </button>
                    ) : (
                      <button
                        className="text-[18px] text-[#fff] bg-[#010f1c] py-[5px] px-[10px] transition duration-200 border-none outline-none cursor-pointer hover:bg-[#0989ff]"
                        onClick={() => handleNotLoggedIn()}
                      >
                        Agregar al carrito
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="top-banner py-[30px] px-[40px] w-[100%] bg-[#e3edf6]">
        <div className="flex justify-center w-[100%] h-[550px] items-center">
          <div className="flex flex-col detail w-[800px] p-[40px]">
            <h2 className="py-[10px] pr-[50%] text-xl text-[#010f1c]">
              La mejor coleccion de notas 2023
            </h2>
            <Link
              to="/product"
              className="flex justify-between items-center w-[140px] py-[10px] px-[20px] transition duration-200 hover:bg-[#0989ff] hover:text-[#fff] rounded-md bg-[#fff] text-[#010f1c]"
            >
              Shop Now <LiaLongArrowAltRightSolid />
            </Link>
          </div>
          <div className="flex items-center justify-center h-[500px]">
            <img className="h-[400px]" src={imageBanner}></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[100px] py-[30px] w-[100%]">
        {firstProducts.map(({ productCategory, thumbnail }, index) => (
          <div className="flex max-w-[100%] justify-between" key={index}>
            <div className="flex flex-col items-center justify-between py-[10px] px-[20px]">
              <div className="flex items-center justify-center h-[220px] w-[220px] rounded-full bg-[#e8f4ff]">
                <img
                  className="w-[170px] h-[170px] transition duration-200 hover:scale-125"
                  src={thumbnail}
                  alt={productCategory}
                ></img>
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-[120px] py-[40px] w-[100%]">
        <div className="flex py-[10px] gap-[10px] bg-[#ecf2f7] w-[250px] h-[90px] rounded-md justify-center items-center cursor-pointer">
          <div className="text-[#e44c8c] text-[32px]">
            <FiTruck />
          </div>
          <div className="ml-[10px]">
            <h3 className="text-[#010f1c]">Free Shipping</h3>
            <p className="text-[#9a9a9a]">Order above 1000$</p>
          </div>
        </div>

        <div className="flex py-[10px] gap-[10px] bg-[#ecf2f7] w-[250px] h-[90px] rounded-md justify-center items-center cursor-pointer">
          <div className="text-[#e44c8c] text-[32px]">
            <BsCurrencyDollar />
          </div>
          <div className="ml-[10px]">
            <h3 className="text-[#010f1c]">Return & Refund</h3>
            <p className="text-[#9a9a9a]">Money Back Warranty</p>
          </div>
        </div>

        <div className="flex py-[10px] gap-[10px] bg-[#ecf2f7] w-[250px] h-[90px] rounded-md justify-center items-center cursor-pointer">
          <div className="text-[#e44c8c] text-[32px]">
            <CiPercent />
          </div>
          <div className="ml-[10px]">
            <h3 className="text-[#010f1c]">Member Discount</h3>
            <p className="text-[#9a9a9a]">On every Order</p>
          </div>
        </div>

        <div className="flex py-[10px] gap-[10px] bg-[#ecf2f7] w-[250px] h-[90px] rounded-md justify-center items-center cursor-pointer">
          <div className="text-[#e44c8c] text-[32px]">
            <FaHeadphones />
          </div>
          <div className="ml-[10px]">
            <h3 className="text-[#010f1c]">Customer Supoprt</h3>
            <p className="text-[#9a9a9a]">Every Time Call Support</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center py-[30px] px-[40px] w-[100%]">
        <h4 className="text-[32px] text-[#010f1c] ml-[82px]">Productos Top</h4>
        <div className="grid gap-18 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-[60px] w-fit mx-auto">
          {products.map((selectedProduct) => {
            const { id, title, thumbnail, price, category } = selectedProduct;
            return (
              <div
                className="pb-[40px] px-[30px] overflow-hidden w-[360px] border-1 border-[#e2e0e0] transition duration-200 cursor-pointer rounded-sm hover:shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
                key={id}
              >
                <div className="flex w-[300px] border-b-1 border-[#e2e0e0] group">
                  <img className="w-[300px]" src={thumbnail} alt={title} />
                  <div className="z-1 relative left-[44px] mt-[14px] transition duration-200 group-hover:-translate-x-[74px]">
                    {status === "authenticated" ? (
                      <li
                        className="flex justify-center items-center list-none p-[10px] w-[44px] h-[44px] text-[#010f1c] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-[#fff] transition duration-200 text-[18px] hover:bg-[#0989ff] hover:text-[#fff]"
                        onClick={() => handleAddToCart(selectedProduct)}
                      >
                        <PiShoppingCart />
                      </li>
                    ) : (
                      <li
                        className="flex justify-center items-center list-none p-[10px] w-[44px] h-[44px] text-[#010f1c] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-[#fff] transition duration-200 text-[18px] hover:bg-[#0989ff] hover:text-[#fff]"
                        onClick={() => handleNotLoggedIn()}
                      >
                        <PiShoppingCart />
                      </li>
                    )}
                    <li
                      className="flex justify-center items-center list-none p-[10px] w-[44px] h-[44px] text-[#010f1c] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-[#fff] transition duration-200 text-[18px] hover:bg-[#0989ff] hover:text-[#fff]"
                      onClick={() => handleView(selectedProduct)}
                    >
                      <IoEyeOutline />
                    </li>
                    <li className="flex justify-center items-center list-none p-[10px] w-[44px] h-[44px] text-[#010f1c] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-[#fff] transition duration-200 text-[18px] hover:bg-[#0989ff] hover:text-[#fff]">
                      <CiHeart />
                    </li>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-[#9a9a9a] text-[14px]">{category}</p>
                  <h5 className="text-[16px] mt-[5px] text-[#010f1c] transition duration-200 hover:text-[#0989ff]">
                    {title}
                  </h5>
                  <h3 className="mt-[5px] text-[14px] text-[#0989ff]">
                    {price}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-[20px] px-[30px] w-[100%]">
        <div className="flex justify-around py-[30px] px-[40px] bg-[#0989ff] rounded-xl">
          <div className="inline-block mt-[30px] mb-[30px] ml-[20px]">
            <h4 className="text-[#e3edf6] text-[16px] tracking-[1px]">
              Ultima tecnologia agregada
            </h4>
            <h3 className="mt-[10px] text-[42px] mr-[20%] tracking-[1px] text-[#fff]">
              {title}
            </h3>
            <p className="flex justify-start items-center my-[20px] text-[#fff] text-[32px] tracking-[1px] font-semibold">
              <BsCurrencyDollar />
              {price}
            </p>
            <Link
              to="/product"
              className="flex justify-between items-center w-[140px] py-[10px] px-[20px] text-[#e8f4ff] bg-[#010f1c] rounded-sm transition duration-200 hover:text-[#010f1c] hover:bg-[#e8f4ff]"
            >
              Shop Now <LiaLongArrowAltRightSolid />
            </Link>
          </div>
          <div className="img-box">
            <img src={thumbnail} alt={title}></img>
          </div>
        </div>
      </div>
    </>
  );
}
