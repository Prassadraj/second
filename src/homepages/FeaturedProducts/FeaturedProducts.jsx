import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import image1 from "../../images/featured/product1.png";
import image2 from "../../images/featured/product2.png";
import image3 from "../../images/featured/product3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Magnetic from "../../component/magneticButton/Magnetic";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: "10px" },
      {
        opacity: 1,
        y: "0px",
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: ".heading",
        stagger: {
          amount: 1,
        },
      }
    );
    gsap.fromTo(
      ".products",
      {
        opacity: 0,
        width: "0%",
      },
      {
        opacity: 1,
        width: "100%",
        duration: 1,
        delay: 1,
        scrollTrigger: ".products",
        stagger: {
          amount: 1,
        },
      }
    );
  }, []);

  return (
    <div className="">
      <div className="flex h-10 items-center md:pl-24 flex-col md:gap-4 heading p-2 text-center">
        <span className="font-semibold text-xl md:text-4xl uppercase  font-poppins text-custom-green">
          Featured Products
        </span>
        <p className="md:text-xl heading font-poppins text-gray-500">
          We use only the best quality materials n the market in order to
          provide the best productsto our patients.
        </p>
      </div>
      <div className="hidden md:block">
        <HorizontalScrollCarousel cards={featuredCards} />
      </div>
      {/* Add a mobile-friendly version if needed */}
      <div className="md:hidden px-3 mb-4">
        <div className="scrollable-container flex overflow-x-scroll space-x-4 py-4">
          {featuredCards.map((product, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center w-32 h-fit"
            >
              <div className="h-44 flex items-center justify-center">
                <img src={product.url} className="w-32 object-cover" alt="" />
              </div>
              <p className="text-center font-bold">{product.title}</p>
              <p className="text-center line-clamp-3">{product.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust these values based on your needs for mobile responsiveness
  const x = useTransform(scrollYProgress, [0, 1.6], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[70vh] md:h-[300vh] products"
    >
      <div className="sticky top-0 flex md:h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 md:gap-8">
          {cards.slice(0, 7).map((card) => (
            <Card card={card} key={card.id} />
          ))}
          <AllProductsCard />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="mt-2 font-poppins` relative h-[250px] w-[150px] md:h-[400px] md:w-[350px] overflow-hidden bg-light-green rounded-2xl">
      <div className="flex justify-center items-center w-full md:mt-10 h-32">
        <img className="md:w-[150px] w-[100px]" src={card.url} alt="" />
      </div>
      <div className="absolute md:top-60 md:left-10 md:right-10 p-0">
        <div className="flex justify-center md:justify-start">
          <p className="md:text-xl font-poppins font-bold ">{card.title}</p>
        </div>
        <p className="text-xs md:text-base line-clamp-3 px-1">{card.content}</p>
      </div>
      <div className="absolute bottom-3 md:bottom-6 w-full">
        <div className="flex justify-center items-center">
          <Magnetic>
            <button className="text-xs w-fit md:w-72 bg-custom-green p-0.5 md:px-3 md:py-2 rounded-lg text-white">
              View Product
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

const AllProductsCard = () => {
  return (
    <div className="group relative h-[400px] w-[100px]  md:w-[200px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Magnetic>
          <div className="mr-10 text-xs md:text-xl font-black text-custom-green p-2 rounded-xl cursor-pointer">
            <Link to="/product">
              <span className="hidden md:block">All Products</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default FeaturedProducts;

const featuredCards = [
  {
    url: image1,
    title: "Title 1",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 1,
  },
  {
    url: image2,
    title: "Title 2",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 2,
  },
  {
    url: image3,
    title: "Title 3",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 3,
  },
  {
    url: image1,
    title: "Title 4",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 4,
  },
  {
    url: image3,
    title: "Title 5",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 5,
  },
];
