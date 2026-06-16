export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}
