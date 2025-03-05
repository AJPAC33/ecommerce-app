import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/auth";

export function AppRouter() {
  const status = useCheckAuth((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {/* {status === "authenticated" ? (
        <Route path="/*" element={<EcommerceRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
}
