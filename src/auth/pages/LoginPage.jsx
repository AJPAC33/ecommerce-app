import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import React, { useMemo } from "react";
import { AuthLayout } from "../layout/AuthLayout";

import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from "../../store/auth/thunks";
import { useForm } from "../../hooks";
import { CiLock, CiUser } from "react-icons/ci";

const formData = {
  email: "anthonyalarcon@google.com",
  password: 123456,
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword({ email, password }));
    navigate("/*");
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
    navigate("/*");
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <div>
          <div className="flex border-1 rounded-md h-[50px] mt-2">
            <div className="w-[50px] flex justify-center items-center bg-gray-300">
              <CiUser />
            </div>
            <input
              className="flex-auto py-[4px] px-[14px] bg-white outline-none text-gray-500"
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="flex border-1 rounded-md h-[50px] mt-6">
            <div className="w-[50px] flex justify-center items-center bg-gray-300">
              <CiLock />
            </div>
            <input
              className="flex-auto py-[4px] px-[14px] bg-white outline-none text-gray-500"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="passsword"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div display={!!errorMessage ? "" : "none"} className="mt-6">
            <div>
              <div severity="error">{errorMessage}</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="border-1 rounded-sm w-[160px] h-[38px] bg-gray-200">
              <button
                className="w-full h-full"
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </button>
            </div>
            <div className="flex border-1 rounded-sm w-[160px] h-[38px] bg-gray-200">
              <button
                className="w-full h-full flex items-center justify-center"
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
              >
                <FcGoogle className="h-full w-[38px] p-[6px]" />
                <div className="p-[8px]">
                  <h2>Google</h2>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              className="underline"
              component={RouterLink}
              color="inherit"
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
