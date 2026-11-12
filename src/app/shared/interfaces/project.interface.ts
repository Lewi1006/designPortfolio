export interface Project {
  id: number;
  title: string;
  medium: string;
  slug: string;
  preview: string;

  collaborators?: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  description?: string;
}
