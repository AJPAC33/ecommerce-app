import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { LuUserRound } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { logo } from "../../assets";

export function NavBar({ searchBtn }) {
  const { status, displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    navigate("/product");
    searchBtn(inputValue);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="main-header flex justify-center border-b-1 border-[#010f1c] py-[30px] px-[40px] w-[100%]">
        <div className="flex justify-between items-center w-[95%]">
          <div className="logo w-[130px] mr-[30px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-row mr-[30px]">
            <input
              className="border-3 border-[#0989ff] focus:border-[#0989ff] outline-none w-[120%] h-12 py-[10px] px-[30px] text-[#010f1c]"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Nombre el producto..."
              autoComplete="off"
            />
            <button
              className="py-[12px] px-[30px] cursor-pointer bg-[#0989ff] text-[#ecf2f7] h-12 w-30"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex mr-[10px] items-center">
              <div className="mr-[10px] text-[22px] cursor-pointer">
                <LuUserRound />
              </div>
              {status === "authenticated" ? (
                <p className="text-[15px]">Hola, {displayName}</p>
              ) : null}
            </div>
            <div className="flex items-center">
              <p>
                <Link
                  to="/"
                  className="flex justify-center text-[#0989ff] text-[22px] mr-[5px] cursor-pointer"
                >
                  <CiHeart />
                </Link>
              </p>
              <p>
                <Link
                  to="/cart"
                  className="flex justify-center text-[#0989ff] text-[22px] mr-[5px] cursor-pointer"
                >
                  <IoBagCheckOutline />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[100%] py-[20px] px-[30px] justify-between items-center shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        <div className="container max-w-[100%] flex justify-between items-center">
          <div className="nav items-center">
            <ul className="flex flex-row">
              <li className="ml-[20px] inline-block">
                <Link
                  to="/"
                  className="text-[#010f1c] transition duration-200 hover:text-[#0989ff]"
                >
                  Home
                </Link>
              </li>
              <li className="ml-[20px] inline-block">
                <Link
                  to="/product"
                  className="text-[#010f1c] transition duration-200 hover:text-[#0989ff]"
                >
                  Productos
                </Link>
              </li>
              <li className="ml-[20px] inline-block">
                <Link
                  to="/about"
                  className="text-[#010f1c] transition duration-200 hover:text-[#0989ff]"
                >
                  Acerca de
                </Link>
              </li>
              <li className="ml-[20px] inline-block">
                <Link
                  to="/contact"
                  className="text-[#010f1c] transition duration-200 hover:text-[#0989ff]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth mr-[20px] text-[20px] cursor-pointer">
            {status === "authenticated" ? (
              <button
                className="mr-[20px] text-[20px] cursor-pointer border-none bg-none"
                onClick={handleLogout}
              >
                <CiLogout />
              </button>
            ) : (
              <button
                className="mr-[20px] text-[20px] cursor-pointer border-none bg-none"
                onClick={handleLogin}
              >
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
