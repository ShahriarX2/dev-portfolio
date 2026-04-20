export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  category?: string;
  featured?: boolean;
  link?: string;
  longDescription?: string;
  role?: string;
  outcome?: string;
  challenges?: string;
}
