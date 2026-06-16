export interface Skill {
  name: string;
  level: number; // percentage value e.g. 90
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
