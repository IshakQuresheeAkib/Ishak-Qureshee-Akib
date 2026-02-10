"use client";

import styles from "./ScrollDown.module.css";

export default function ScrollDown(): React.ReactElement {
  const handleScroll = (): void => {
    // Attempt to scroll to the Projects section, or fallback to window scroll
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to next section"
      className="absolute bottom-1 left-1/2 -translate-x-1/2 lg:flex cursor-pointer flex-col items-center justify-center opacity-80 transition-opacity hover:opacity-100 hidden"
    >
      <div className="relative h-[60px] w-[30px] rounded-[60px] border-[3px] border-white">
        <div
          className={`absolute left-1/2 top-[5px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-white ${styles.mouseWheel}`}
        />
      </div>
    </button>
  );
}