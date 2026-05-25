import { TECH_ICONS } from "@/lib/projects";
import type { IconType } from "react-icons";

interface TechIconListProps {
  techs: string[];
  label: string;
}

export default function TechIconList({
  techs,
  label,
}: TechIconListProps): React.ReactElement | null {
  if (!techs || techs.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-500">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {techs.map((tech) => {
          const Icon: IconType = TECH_ICONS[tech] || TECH_ICONS["React"];
          return (
            <div
              key={tech}
              className="group relative flex items-center justify-center p-1.5 sm:p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-slate-400 hover:bg-slate-800 transition-all duration-300 backdrop-blur-md shadow-sm"
              title={tech}
              aria-label={tech}
              role="img"
            >
              <Icon
                aria-hidden="true"
                className="text-lg sm:text-2xl text-slate-300 group-hover:text-white transition-colors"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
