import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CatalogsProvider } from "./context/CatalogsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatalogsProvider>
      <App />
    </CatalogsProvider>
  </StrictMode>
);
