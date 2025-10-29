import type React from 'react';

export interface Metric {
  value: string;
  label: string;
  color?: 'green' | 'blue' | 'yellow' | 'red' | 'gray';
}

export interface ProjectDetail {
  label: string;
  value: string;
}

// --- New Types for About Page ---
export interface DesignPhilosophyItem {
  title: string;
  description: string;
}

export interface JourneyItem {
  company: string;
  companyLogo: React.FC<{ className?: string }> | string;
  position: string;
  description?: string;
  location: string;
  period: string;
}

export interface AboutPageData {
  profileImageUrl: string;
  title: string;
  intro: string;
  designPhilosophy: {
    title: string;
    points: DesignPhilosophyItem[];
  };
  journey: {
    title: string;
    history: JourneyItem[];
  };
  beyondPixels: {
    title: string;
    text: string;
  };
  connect: {
    title: string;
    text: string;
    buttonText: string;
  };
}
// --- End New Types ---


export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; content: string; color?: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; caption?: string; isExpandable?: boolean }
  | { type: 'list'; style: 'ordered' | 'unordered'; items: string[] }
  | { type: 'twoColumn'; columns: [{ blocks: ContentBlock[] }, { blocks: ContentBlock[] }] }
  | { type: 'threeColumn'; columns: [{ blocks: ContentBlock[] }, { blocks: ContentBlock[] }, { blocks: ContentBlock[] }] }
  | { type: 'metricCards'; metrics: Metric[] }
  | { type: 'table'; headers: string[]; rows: (string | number)[][] }
  | { type: 'fullWidthImage'; src: string; caption?: string; isExpandable?: boolean }
  | { type: 'carousel'; slides: { src: string; caption?: string }[] }
  | { type: 'quote'; text: string; author?: string; color?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'purple'  }
  | { type: 'video'; url: string; caption?: string }
  | { type: 'callToAction'; title: string; text: string; buttonText: string; buttonUrl: string; color?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' }
  | { type: 'messageBar'; title?: string; text: string; color?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' };

export interface ProjectSection {
  title: string;
  titleColor?: string;
  blocks: ContentBlock[];
}

export interface Project {
  id: number;
  slug: string; // URL-friendly identifier for the project
  password?: string; // Optional password for the project
  company: string; // The company where the project was done
  companyLogoUrl: string; // URL or data URI for the company logo
  title: string;
  titleColor?: string;
  description: string; // Short description for the card
  metrics: Metric[]; // Key metrics for the homepage card
  showMetricsOnCard?: boolean; // Controls visibility of metrics on homepage card
  imageUrl?: string;
  imagePosition?: 'left' | 'right';

  // --- Detailed page content ---
  heroImage: string;
  /**
   * Optional flag to hide the hero image on the project details page.
   * Useful for projects that shouldn't show a large banner or when you
   * want the page to start directly with content sections.
   */
  hideHero?: boolean;
  overview: string;
  details: ProjectDetail[]; // Flexible key-value pairs for role, timeline, etc.
  gradientBackgroundColor?: string;
  
  // New flexible content structure for case studies
  sections: ProjectSection[];
}