import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import { RulesPage } from "./RulesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RulesPage />
  </StrictMode>,
);
