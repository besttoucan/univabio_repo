import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import { NotFoundPage } from "./NotFoundPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotFoundPage />
  </StrictMode>,
);
