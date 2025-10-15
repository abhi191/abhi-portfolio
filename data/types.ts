export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  password?: string; // Optional password for the project
  company: string; // The company where the project was done
  companyLogoUrl: string; // URL or data URI for the company logo
  title: string;
  description: string; // Short description for the card
  metrics: Metric[];
  imageUrl?: string;
  imagePosition?: 'left' | 'right';

  // --- Detailed page content ---
  heroImage: string;
  role: string;
  timeline: string;
  overview: string;
  problemStatement: {
    title: string;
    content: string[]; // Array of paragraphs
  };
  goals: {
    title: string;
    items: string[]; // List of goals
  };
  process: {
    title: string;
    description: string;
    imageUrl: string;
  };
  challenges: {
    title: string;
    content: string;
  };
  solution: {
    title: string;
    content: string;
    imageUrl: string;
  };
  results: {
    title: string;
    // Metrics are already defined at the top level
  };
  learnings: {
    title: string;
    items: string[];
  };
}
