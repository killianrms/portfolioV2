export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: 'Personnel' | 'Universitaire';
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactForm {
  user_name: string;
  user_email: string;
  message: string;
}