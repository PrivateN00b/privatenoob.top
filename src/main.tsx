import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Oneko from "./features/oneko/Oneko.tsx";
import './stylex.css' // Import the StyleX CSS file

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Oneko />
    </React.StrictMode>
  </Provider>
);
