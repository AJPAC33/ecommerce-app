import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="py-[40px] px-[80px] w-[100%] bg-[#ecf2f7]">
        <div className="flex max-w-[100%] justify-between items-center">
          <div className="max-w-[30%] mt-[30px]">
            <div className="w-[100px]">
              <img src="src\assets\logo.png" alt="logo" />
            </div>
            <div>
              <p className="mt-[20px] text-[16px] text-[#010f1c]">
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
          <div className="mr-[60px] mt-[30px]">
            <h3 className="text-[32px] text-[#010f1c]">Mi cuenta</h3>
            <ul className="mt-[10px] ml-[20px]">
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Cuenta
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Orden
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Carrito
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Envio
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Devolucion
              </li>
            </ul>
          </div>
          <div className="mr-[60px] mt-[30px]">
            <h3 className="text-[32px] text-[#010f1c]">Paginas</h3>
            <ul className="mt-[10px] ml-[20px]">
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Home
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Acerca de
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Contacto
              </li>
              <li className="mt-[5px] text-[#010f1c] text-[14px] transition duration-200 cursor-pointer hover:text-[#0989ff]">
                Terminos y condiciones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
