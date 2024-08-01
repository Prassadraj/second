import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import ProductDataProvider from "./component/Context/ProductData.jsx";
import CategoryProvider from "./component/Context/CategoryContext.jsx";
import MobileBtn from "./component/Context/MobileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductDataProvider>
    <CategoryProvider>
      <MobileBtn>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </MobileBtn>
    </CategoryProvider>
  </ProductDataProvider>
);
