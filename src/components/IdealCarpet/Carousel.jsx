import React, { useState, useEffect } from "react";
import css from "./Carousel.module.css";

export const Carousel = () => {
  const slidesData = [
    {
      caption: 2341784,
      image: "https://bespoke-rug.com/assets/images/content/ideal_big_img6.jpg",
    },

    {
      caption: 3470783,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img11.jpg",
    },

    {
      caption: 3470780,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img12.jpg",
    },
    {
      caption: 2341784,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img10.jpg",
    },

    {
      caption: 3470780,
      image: "https://bespoke-rug.com/assets/images/content/ideal_big_img8.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically advance slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className="carouselContainer">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`carouselSlide ${currentSlide === index ? "active" : ""}`}
        >
          <img src={slide.imageUrl} alt="" />
          <div className={css.carouselOverlay}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            <p className={css.readMore}>Read More…</p>
          </div>
        </div>
      ))}

      <div className="carousel-controls">
        <button className={css.prevButton} onClick={prevSlide}>
          Previous
        </button>
        <button className={css.nextButton} onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
