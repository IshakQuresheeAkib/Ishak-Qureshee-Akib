import type { ReactElement } from "react";

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
