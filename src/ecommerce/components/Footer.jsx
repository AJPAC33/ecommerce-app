import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="py-[40px] px-[80px] w-[100%] bg-[#ecf2f7]">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="hidden md:block col-span-1 mt-[10px]">
            <div className="w-[100px]">
              <img src="src\assets\logo.png" alt="logo" />
            </div>
            <div>
              <p className="mt-[20px] text-[16px] text-center text-[#010f1c]">
                Somos un equipo de diseñadores y desarrolladores que crean webs
                de alta calidad
              </p>
              <div className="flex mt-[20px]">
                <li className="ml-[20px] list-none p-[10px] shadow-[1.95px_1.95px_1.95px_rgba(0,0,0,0.15)] cursor-pointer transition duration-200 hover:bg-[#0989ff] hover:text-[#fff] rounded-sm text-16px]">
                  <FaFacebookF />
                </li>
                <li className="ml-[20px] list-none p-[10px] shadow-[1.95px_1.95px_1.95px_rgba(0,0,0,0.15)] cursor-pointer transition duration-200 hover:bg-[#0989ff] hover:text-[#fff] rounded-sm text-16px]">
                  <FaInstagram />
                </li>
                <li className="ml-[20px] list-none p-[10px] shadow-[1.95px_1.95px_1.95px_rgba(0,0,0,0.15)] cursor-pointer transition duration-200 hover:bg-[#0989ff] hover:text-[#fff] rounded-sm text-16px]">
                  <FaTwitter />
                </li>
                <li className="ml-[20px] list-none p-[10px] shadow-[1.95px_1.95px_1.95px_rgba(0,0,0,0.15)] cursor-pointer transition duration-200 hover:bg-[#0989ff] hover:text-[#fff] rounded-sm text-16px]">
                  <FaYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-[10px]">
            <h3 className="place-self-center text-[24px] md:text-[32px] text-center text-[#010f1c]">
              Mi cuenta
            </h3>
            <ul className="flex flex-col items-center mt-[10px]">
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Cuenta
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Orden
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                <Link to="/cart">Carrito</Link>
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Envio
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Devolucion
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-[10px]">
            <h3 className="place-self-center text-[24px] md:text-[32px] text-center text-[#010f1c]">
              Paginas
            </h3>
            <ul className="flex flex-col items-center mt-[10px]">
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                <Link to="/home">Home</Link>
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Acerca de
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                <Link to="/contact">Contacto</Link>
              </li>
              <li className="mt-[5px] text-center text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Terminos y condiciones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
