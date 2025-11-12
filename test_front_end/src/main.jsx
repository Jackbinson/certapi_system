// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Certificate } from "./screen/Certificate";
import './index.css';
// Sửa "app" thành "root" ở đây
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Certificate />
  </StrictMode>,
);