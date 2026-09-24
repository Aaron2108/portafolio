import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds = [], offset = 120) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      if (sectionIds.length > 0 && window.scrollY < 200) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
