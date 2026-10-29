export type ProjectCategory = 'all' | 'commerce' | 'interaction' | 'system';

export interface ProjectSection {
  title: string;
  desc?: string;
  bullets?: string[];
  items?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'commerce' | 'interaction' | 'system';
  categoryLabel: string;
  period: string;
  role: string;
  contribution: string;
  featured: boolean;
  summary: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  overview: string;
  problem: {
    title: string;
    desc: string;
    bullets: string[];
  };
  solution: {
    title: string;
    desc: string;
    bullets: string[];
  };
  keyRequirements: {
    title: string;
    items: string[];
  }[];
  techCollaboration: {
    title: string;
    items: string[];
  };
  results: {
    title: string;
    items: string[];
  };
  insights: string;
  sourceVerified?: boolean;
  verificationNote?: string;
}

export interface Capability {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  points: string[];
  tags: string[];
}

export interface CareerItem {
  period: string;
  role: string;
  organization: string;
  tagline: string;
  details: string[];
  verifiedNote?: string;
}
