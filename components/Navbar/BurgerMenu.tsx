"use client";

import { FaHome } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { NAV_ITEMS } from "@/lib/constants";

export default function BurgerMenu(): React.ReactElement {
  // Map icons to nav items
  const iconMap: Record<string, React.ReactElement> = {
    "Home": <FaHome />,
    "Projects": <RiShareBoxLine />,
    "Contact Me": <MdAlternateEmail />,
  };

  const handleNavClick = (link: string): void => {
    if (link.startsWith("#")) {
      const targetId = link.substring(1) || "banner";
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div>
      <input type="checkbox" className="toggler" aria-label="Toggle menu" />
      <div id="hamburger">
        <div></div>
      </div>
      <div id="menu">
        <div>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.link);
                  }}
                >
                  {iconMap[item.title]}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
