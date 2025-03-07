import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { EcommerceApp } from "./EcommerceApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <EcommerceApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
