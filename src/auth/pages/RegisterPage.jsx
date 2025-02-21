import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const formData = {
  email: "anthonyalarcon@google.com",
  password: 123456,
  displayName: "Anthony Alarcon",
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe tener un @"],
    password: [
      (value) => value.length >= 6,
      "El password debe tener mas de 6 letras",
    ],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
  };

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <div>
          <div className="flex border-1 rounded-md h-[50px]">
            <input
              className="w-full py-[4px] px-[14px] bg-white outline-none text-gray-500"
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </div>
          <div className="flex border-1 rounded-md h-[50px] mt-6">
            <input
              className="w-full py-[4px] px-[14px] bg-white outline-none text-gray-500"
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </div>
          <div className="flex border-1 rounded-md h-[50px] mt-6">
            <input
              className="w-full py-[4px] px-[14px] bg-white outline-none text-gray-500"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </div>
          <div className="flex justify-center mt-6">
            <div display={!!errorMessage ? "" : "none"}>
              <div severity="error">{errorMessage}</div>
            </div>
            <div className="border-1 rounded-sm w-[160px] bg-gray-200 h-[38px]">
              <button
                className="w-full h-full"
                disabled={isCheckingAuthentication}
                type="submit"
              >
                Crear cuenta
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <p className="mr-1">¿Ya tienes cuenta?</p>
            <Link
              className="underline"
              component={RouterLink}
              color="inherit"
              to="/auth/login"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
