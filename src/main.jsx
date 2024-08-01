import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import ProductDataProvider from "./component/Context/ProductData.jsx";
import CategoryProvider from "./component/Context/CategoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductDataProvider>
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </CategoryProvider>
  </ProductDataProvider>
);
