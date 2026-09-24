import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Calculate percentage (0 to 100)
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Show button when scrolled past ~350px (beyond hero)
      if (scrollTop > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially in case page loads already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Circumference for r = 20: 2 * Math.PI * 20 ≈ 125.66
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`scroll-to-top-wrapper ${isVisible ? "visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        tabIndex={isVisible ? 0 : -1}
        aria-label="Volver al inicio"
        title="Volver al inicio"
      >
        {/* SVG Progress Ring */}
        <svg
          className="scroll-progress-ring"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="scrollProgressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Background Track */}
          <circle
            className="progress-ring-track"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            strokeWidth="3"
          />

          {/* Dynamic Fill Circle */}
          <circle
            className="progress-ring-fill"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Arrow Icon */}
        <div className="scroll-arrow-icon-box">
          <FaArrowUp className="scroll-arrow-icon" />
        </div>

        {/* Tooltip to the left */}
        <span className="scroll-to-top-tooltip">Volver al inicio</span>
      </button>
    </div>
  );
};

export default ScrollToTop;
