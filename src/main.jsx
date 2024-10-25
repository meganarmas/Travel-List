import React from "react";
import REACTDOM from "react-dom/client";
import "./index.css";
import App from "./componets/App.jsx";

const root = REACTDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
