"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 border border-neutral-600/10 bg-neutral-300/10 hover:bg-neutral-300/20 hover:shadow-md dark:hover:bg-neutral-800/70 text-green-500 hover:text-green-300 dark:hover:text-amber-500 shadow-lg shadow-zinc-700/20 dark:text-(--Accent) p-3 rounded-full transition duration-300 ease-in-out cursor-pointer z-100 hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="group:hover:scale-110"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
