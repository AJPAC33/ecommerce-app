import React from "react";

export const Contact = () => {
  const handleSendData = () => {
    alert("Mensaje Enviado");
  };

  return (
    <div className="py-[30px] px-[40px] bg-[#f6f6f6]">
      <div className="py-[10px] px-[20px] max-w-[100%]">
        <h2 className="uppercase text-[12px] text-[#010f1c] font-extralight">
          # Contactanos
        </h2>
        <div>
          <form
            className="flex flex-col items-center mt-[30px] py-[20px] px-[30px] bg-[#fff] rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.24)] [&_.child]:placeholder-gray-500 [&_.child]:py-[10px] [&_.child]:px-[30px] [&_.child]:outline-none [&_.child]:bg-transparent [&_.child]:border-b-2 [&_.child]:w-[200px] md:[&_.child]:w-[350px] [&_.child]:mt-[20px]"
            method="POST"
          >
            <input
              className="child"
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              autoComplete="off"
              required
            />
            <input
              className="child"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              autoComplete="off"
              required
            />
            <input
              className="child"
              type="text"
              name="subject"
              placeholder="Ingresa el asunto"
              autoComplete="off"
              required
            />
            <textarea
              className="child resize-none "
              name="message"
              placeholder="Tu mensaje"
              autoComplete="off"
              required
            />
            <button
              className="mt-[30px] w-[100px] py-[10px] px-[0px] border-none outline-none bg-[#010f1c] text-[#fff] cursor-pointer"
              type="submit"
              onClick={() => handleSendData()}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
