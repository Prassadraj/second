import React, { useEffect, useRef, useState } from "react";
import "./TestimonialSlider.css";
import bgImage from "../../images/BgImages/testimonial-bg.webp";

function TestimonialSlider() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const data = [
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
      name: "Julie",
      desc: "The quality of service and products we received from CPC Diagnostics is unmatched. Their attention to detail and customer care are exceptional.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Sophie",
      desc: "CPC Diagnostics consistently delivers reliable products that meet our needs. Their customer support team is always ready to assist us.",
    },
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
      name: "Julie",
      desc: "We are extremely satisfied with the products from CPC Diagnostics. Their innovative solutions have greatly improved our workflow.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Sophie",
      desc: "CPC Diagnostics offers top-notch products and exceptional customer service. Their dedication to quality is evident in everything they do.",
    },
  ];

  const [scrollAmount, setScrollAmount] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateCardWidth = () => {
      const width = slider.querySelector(".cardd")?.offsetWidth || 0;
      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, [data.length]);

  useEffect(() => {
    if (!sliderRef.current || cardWidth === 0) return;

    const slider = sliderRef.current;
    const totalWidth = cardWidth * data.length;
    const scrollStep = cardWidth + 20; // Adjust spacing if necessary

    scrollIntervalRef.current = setInterval(() => {
      setScrollAmount((prevAmount) => {
        const newAmount = prevAmount + scrollStep;
        if (newAmount >= totalWidth) return 0;
        return newAmount;
      });

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      setActiveSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000); // Scroll speed

    return () => clearInterval(scrollIntervalRef.current);
  }, [scrollAmount, cardWidth, data.length]);

  const handleDotClick = (index) => {
    if (!sliderRef.current || cardWidth === 0) return;

    setScrollAmount(cardWidth * index);
    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <div className="md:h-[100vh]">
      <div className="flex justify-center items-center flex-col gap-2 md:p-5">
        <p className="text-lg md:text-4xl text-custom-green font-semibold headline font-poppins uppercase">
          Testimonials
        </p>
        <p
          className="md:text-xl w-full text-gray-900 tracking-wide"
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          Our experience with CPC Diagnostics has been exceptional. Their
          products are reliable, and their support is outstanding.
        </p>
      </div>

      <div
        ref={sliderRef}
        className="custom-scrollbar md:mt-10 md:mx-10 h-[150px] flex md:h-[250px] gap-6 overflow-hidden p-2 smooth-scroll"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="cardd bg-black/10 gap-1 p-2 md:p-3 rounded-lg text-gray-500 flex-col flex md:gap-3 font-poppins"
          >
            <div className="flex items-center w-[125px] md:w-[550px] md:gap-2 gap-1 md:p-3">
              <img
                className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover"
                src={item.img}
                alt={item.name}
              />
              <p className="md:text-xl text-base">{item.name}</p>
            </div>
            <div className="text-[9px] md:text-lg md:px-3">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {data.map((_, i) => (
          <p
            key={i}
            className={`w-3 h-3 md:w-5 md:h-5 rounded-full cursor-pointer ${
              activeSlide === i ? "bg-black/50" : " border-2 border-black/50"
            }`}
            onClick={() => handleDotClick(i)}
          ></p>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
