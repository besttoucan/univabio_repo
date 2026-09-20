import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import { CompetePage } from "./CompetePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompetePage />
  </StrictMode>,
);
