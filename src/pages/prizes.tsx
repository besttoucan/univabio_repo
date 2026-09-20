import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import { PrizesPage } from "./PrizesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrizesPage />
  </StrictMode>,
);
