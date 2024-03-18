/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from "react";
import "./scrolltotop.css";
import chevron from "../assets/chevron-vers-le-haut.png";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scrool", handleScroll);
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div>
        <img
          src={chevron}
          alt="chevron"
          className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        />
      </div>
    </>
  );
}
