"use client";

import { useScrollSnap } from "@/lib/ScrollSnapContext";
import { useCallback } from "react";
import "./SectionIndicator.css";

export default function SectionIndicator(): React.ReactElement {
  const { activeSection, sections, scrollToSection } = useScrollSnap();

  const handleDotClick = useCallback(
    (index: number): void => {
      scrollToSection(index);
    },
    [scrollToSection]
  );

  return (
    <nav className="indicator" aria-label="Section navigation" data-active={activeSection}>
      {sections.map((section, index) => (
        <label
          key={section.id}
          className={`indicator-item ${activeSection === index ? "active" : ""}`}
          title={section.title}
        >
          <input
            type="radio"
            name="section-indicator"
            checked={activeSection === index}
            onChange={() => handleDotClick(index)}
            className="sr-only"
          />
          <span className="indicator-dot" />
          <span className="indicator-label">{section.title}</span>
        </label>
      ))}
    </nav>
  );
}
