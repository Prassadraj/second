import { useEffect } from "react";
import Nav from "./component/Nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Brand from "./component/Brand/Brand";
import Product from "./component/Product/Product";
import Career from "./component/Career/Career";
import Success from "./component/OurSuccess/Success";
import Blog from "./component/Blog/Blog";
import gsap from "gsap";
import ProductInfo from "./component/ProductInfo/ProductInfo";
import CSRPolicy from "./component/CSRPolicy/CSRPolicy";
import SingleBlog from "./component/Blog/SingleBlog";
import New from "./homepages/Organisation/New";

function App() {
  const location = useLocation();

  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.8, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/csr" element={<CSRPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/career" element={<Career />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/productinfo/:category/:id" element={<ProductInfo />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
