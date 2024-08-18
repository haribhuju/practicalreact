import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import formStore from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={formStore}>
      <App />
    </Provider>
  </StrictMode>
);
