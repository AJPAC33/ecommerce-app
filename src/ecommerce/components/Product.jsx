import React, { useEffect, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import {
  useCategories,
  useProductsByCategory,
  useProductSearch,
} from "../../hooks/customHooks";
import { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const Product = ({
  product,
  setProduct,
  detail,
  closeState,
  setCloseState,
  handleAddToCart,
  handleNotLoggedIn,
  handleView,
}) => {
  const { status } = useSelector((state) => state.auth);
  const modalRef = useRef();
  const categories = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return categories.length > 0 ? categories[0].category : [];
  });

  const productsByCategory = useProductsByCategory(selectedCategory);
  const searchedProducts = useProductSearch(product);

  const categoryActions = categories.reduce((acc, { name, category }) => {
    acc[name] = () =>
      setSelectedCategory(Array.isArray(category) ? category : [category]);
    return acc;
  }, {});

  const handleCategorySelection = (categoryName) => {
    setProduct("");
    categoryActions[categoryName]();
  };

  const handleClose = () => {
    setCloseState(true);
  };

  const products = useMemo(() => {
    return product.length > 0 ? searchedProducts : productsByCategory;
  }, [product, searchedProducts, productsByCategory]);

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

      <div className="py-[30px] px-[40px] w-[100%]">
        <h2 className="text-[42px] tracking-normal uppercase font-light text-[#010f1c]">
          # Productos
        </h2>
        <p className="mt-[10px] text-[#9a9a9a]">Home . productos</p>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-[20px] max-w-[100%] gap-20">
          <div className="md:mx-auto py-[20px] px-[30px] col-span-1">
            <div className="flex flex-col">
              <h3 className="text-[#010f1c] text-[16px] uppercase font-semibold">
                Categorias:
              </h3>
              <ul className="flex flex-col mt-[10px]">
                {categories.map(({ id, name }) => (
                  <li
                    key={id}
                    onClick={() => handleCategorySelection(name)}
                    className="list-none text-[#010f1c] p-2 cursor-pointer"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            {searchedProducts.length > 0 ? (
              <div className="grid md:grid-cols-3 grid-cols-1  gap-10 flex-wrap">
                {products?.map((selectedProduct) => {
                  const { id, title, thumbnail, price, category } =
                    selectedProduct;
                  return (
                    <div
                      className="place-self-center pb-[40px] px-[30px] overflow-hidden w-[360px] border-1 border-[#e2e0e0] transition duration-200 cursor-pointer rounded-sm hover:shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
                      key={id}
                    >
                      <div className="flex w-[300px] border-b-1 border-[#e2e0e0] group">
                        <img
                          className="w-[300px]"
                          src={thumbnail}
                          alt={title}
                        />
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
            ) : (
              <div>No se encontraron coincidencias</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
