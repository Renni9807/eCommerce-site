import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./SlideShow.css";

const SlideShow = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [entering, setEntering] = useState(false);
  const length = slides.length;
  const isNavigatingRef = useRef(false);

  const debounceNavigation = (callback) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    callback();
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1200); // Debounce time greater than the animation time to prevent overlapping
  };

  const nextSlide = useCallback(() => {
    debounceNavigation(() => {
      setLeaving(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        setLeaving(false);
        setEntering(true);
        setTimeout(() => setEntering(false), 1000);
      }, 1000);
    });
  }, [length]);

  const prevSlide = useCallback(() => {
    debounceNavigation(() => {
      setLeaving(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
        setLeaving(false);
        setEntering(true);
        setTimeout(() => setEntering(false), 1000);
      }, 1000);
    });
  }, [length]);

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      if (!isNavigatingRef.current) {
        nextSlide();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearTimeout(autoSlide);
  }, [current, nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slide-container">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""} ${
            leaving ? "slide-leaving" : ""
          } ${entering ? "slide-entering" : ""}`}
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(SlideShow);
