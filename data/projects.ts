export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  password?: string; // Optional password for the project
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

export const projects: Project[] = [
  {
    id: 1,
    password: 'uxredesign24',
    title: 'E-commerce Redesign',
    description: 'Complete UX overhaul of a fashion e-commerce platform focusing on streamlined navigation, simplified checkout process, and mobile-first design approach.',
    metrics: [
      { value: '+40%', label: 'Conversion Rate' },
      { value: '-25%', label: 'Cart Abandonment' },
      { value: '+85%', label: 'Mobile Revenue' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
    imagePosition: 'left',
    
    // --- Detailed page content ---
    heroImage: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop',
    role: 'Lead UX Designer, Researcher',
    timeline: '6 Months (Jan 2024 - Jun 2024)',
    overview: 'This project was a complete redesign of a legacy fashion e-commerce platform struggling with low conversion rates and high cart abandonment. The goal was to modernize the user experience, adopt a mobile-first approach, and create a seamless journey from product discovery to checkout.',
    problemStatement: {
        title: 'The Problem',
        content: [
            "The existing platform was built on an outdated architecture, leading to slow load times and a clunky user interface. User feedback consistently highlighted a confusing navigation structure, a frustratingly long checkout process, and a poor mobile experience.",
            "Analytics confirmed these issues: mobile bounce rates were over 70%, and the multi-page checkout process saw a 45% drop-off rate."
        ]
    },
    goals: {
        title: 'Project Goals',
        items: [
            "Increase overall conversion rate by at least 30%.",
            "Reduce cart abandonment by 20%.",
            "Improve the mobile user satisfaction score (CSAT) by 2 points.",
            "Create a scalable design system for future feature rollouts."
        ]
    },
    process: {
        title: 'My Design Process',
        description: 'We followed a user-centered design methodology, starting with in-depth research to understand our users\' frustrations. This included user interviews, competitive analysis, and creating detailed personas. We then moved to low-fidelity wireframes and interactive prototypes, conducting multiple rounds of usability testing to refine the navigation and checkout flow before committing to high-fidelity designs.',
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
    },
    challenges: {
        title: 'Challenges Faced',
        content: 'One of the biggest challenges was balancing the needs of long-time, loyal customers who were accustomed to the old layout with the goal of attracting a new, younger demographic. We had to make bold design decisions while ensuring the new interface remained intuitive for all user segments. Another challenge was migrating a massive product catalog without disrupting the user experience.'
    },
    solution: {
        title: 'The Solution',
        content: 'The final design introduced a streamlined, single-page checkout, a visually-driven mega menu for intuitive navigation, and personalized product recommendations. We implemented a clean, minimalist UI with high-quality product imagery at its core. The entire experience was rebuilt from the ground up to be fully responsive and optimized for mobile performance.',
        imageUrl: 'https://images.unsplash.com/photo-1586923838499-199b06b88b0a?q=80&w=2070&auto=format&fit=crop'
    },
    results: {
        title: 'Results & Impact',
    },
    learnings: {
        title: 'Key Learnings',
        items: [
            "The power of iterative testing: Early and frequent usability tests with low-fidelity prototypes saved us countless hours of development time by catching design flaws early.",
            "Mobile-first is non-negotiable: Designing for the smallest screen first forced us to prioritize features and create a more focused, efficient user experience that scaled beautifully to larger devices.",
            "A design system is a life-saver: Investing time upfront to build a comprehensive design system created consistency and dramatically sped up the development and design process for new features post-launch."
        ]
    }
  },
  {
    id: 2,
    password: 'saasdata',
    title: 'SaaS Dashboard for Data Analytics',
    description: 'Designed a user-centric dashboard for a B2B SaaS product, enabling users to visualize and interact with complex data sets effortlessly.',
    metrics: [
      { value: '2X', label: 'Faster Task Completion' },
      { value: '9/10', label: 'User Satisfaction' },
      { value: '-30%', label: 'Support Tickets' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', role: 'UX Designer', timeline: '3 Months', overview: 'A B2B SaaS company needed a dashboard redesign to reduce complexity and improve data discoverability for their non-technical user base.', problemStatement: { title: 'The Problem', content: ['Users felt overwhelmed by the density of data and lacked a clear path to find insights. This led to low adoption and high reliance on customer support.'] }, goals: { title: 'Project Goals', items: ['Simplify the main dashboard view.', 'Improve task completion time for key reports.', 'Reduce support tickets related to data finding.'] }, process: { title: 'My Design Process', description: 'The process involved stakeholder workshops to define key metrics, followed by card sorting exercises with users to create a more intuitive information architecture. Wireframes were tested to validate the new, simplified layouts.', imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop' }, challenges: { title: 'Challenges Faced', content: 'The primary challenge was accommodating the vast amount of data required by power users while still providing a simple entry point for novices. Technical limitations of the existing charting library also posed a constraint.' }, solution: { title: 'The Solution', content: 'The new dashboard features a customizable widget system, allowing users to tailor the view to their needs. A prominent global search and filtering system was introduced to make data more accessible. We created a progressive disclosure system, hiding advanced options until they are explicitly requested by the user.', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' }, results: { title: 'Results & Impact' }, learnings: { title: 'Key Learnings', items: ['Customization is key for diverse user bases.', 'A powerful search can be more effective than a complex navigation structure.'] },
  },
  {
    id: 3,
    password: 'healthapp',
    title: 'Mobile App for Healthcare',
    description: 'Created a mobile application to help patients manage their medical records, appointments, and prescriptions in one secure place.',
    metrics: [
      { value: '50k+', label: 'Active Monthly Users' },
      { value: '4.8 ★', label: 'App Store Rating' },
      { value: '+25%', label: 'Patient Engagement' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d279f9?q=80&w=2070&auto=format&fit=crop', role: 'Product Designer', timeline: '8 Months', overview: 'This project aimed to empower patients by giving them easy, secure access to their health information and a direct line of communication with their care providers.', problemStatement: { title: 'The Problem', content: ['Patients struggled to keep track of their appointments, medication schedules, and test results, often relying on paper records or multiple disconnected patient portals.'] }, goals: { title: 'Project Goals', items: ['Consolidate medical records into a single view.', 'Simplify the appointment scheduling process.', 'Increase medication adherence through reminders.'] }, process: { title: 'My Design Process', description: 'Given the sensitive nature of health data, the process started with a heavy focus on security and privacy best practices (HIPAA compliance). We co-designed features with a patient advisory group to ensure the app met real-world needs. The UI was designed with accessibility (WCAG 2.1 AA) as a top priority.', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop' }, challenges: { title: 'Challenges Faced', content: 'Integrating with various electronic health record (EHR) systems, each with its own API and data format, was a major technical and design hurdle. Ensuring the app was simple enough for users who may be elderly or not tech-savvy was also a critical challenge.' }, solution: { title: 'The Solution', content: 'The app provides a clear timeline of a patient\'s health history, a simple "one-tap" appointment booking system, and intelligent prescription refill reminders. A secure messaging feature allows direct communication with doctors\' offices. All data is encrypted both in transit and at rest.', imageUrl: 'https://images.unsplash.com/photo-1620366299830-18a7d329d7de?q=80&w=1964&auto=format&fit=crop' }, results: { title: 'Results & Impact' }, learnings: { title: 'Key Learnings', items: ['When designing for healthcare, trust and security are the most important features.', 'Involving end-users from the very beginning is crucial for creating a product that truly helps them.'] },
  },
];