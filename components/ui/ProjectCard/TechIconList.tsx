import { TECH_ICONS } from "@/lib/projects";
import type { IconType } from "react-icons";
import NeoSkillCircle from "@/components/sections/MySkills/NeoSkillCircle";

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
      <div className="flex flex-wrap gap-1.5 items-center">
        {techs.map((tech) => {
          const Icon: IconType = TECH_ICONS[tech] || TECH_ICONS["React"];
          return (
            <NeoSkillCircle 
              key={tech}
              size="sm"
              skill={{ 
                name: tech, 
                icon: <Icon aria-hidden="true" className="text-slate-300 group-hover:text-white transition-colors" /> 
              }} 
            />
          );
        })}
      </div>
    </div>
  );
}
