import type { Project } from '../types';

export const googleEcommerceProject: Project = {
  id: 1,
  password: 'uxredesign24',
  company: 'Google',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
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
  
  sections: [
    {
      title: 'The Problem',
      blocks: [
        { type: 'paragraph', content: "The existing platform was built on an outdated architecture, leading to slow load times and a clunky user interface. User feedback consistently highlighted a confusing navigation structure, a frustratingly long checkout process, and a poor mobile experience." },
        { type: 'paragraph', content: "Analytics confirmed these issues: mobile bounce rates were over 70%, and the multi-page checkout process saw a 45% drop-off rate." }
      ]
    },
    {
      title: 'Project Goals',
      blocks: [
        { type: 'list', style: 'ordered', items: [
          "Increase overall conversion rate by at least 30%.",
          "Reduce cart abandonment by 20%.",
          "Improve the mobile user satisfaction score (CSAT) by 2 points.",
          "Create a scalable design system for future feature rollouts."
        ]}
      ]
    },
    {
      title: 'My Design Process',
      blocks: [
        { type: 'paragraph', content: 'We followed a user-centered design methodology, starting with in-depth research to understand our users\' frustrations. This included user interviews, competitive analysis, and creating detailed personas. We then moved to low-fidelity wireframes and interactive prototypes, conducting multiple rounds of usability testing to refine the navigation and checkout flow before committing to high-fidelity designs.'},
        { type: 'image', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop', caption: 'Our collaborative design process in action.' }
      ]
    },
    {
      title: 'Challenges & A Two-Column Layout Example',
      blocks: [
        { type: 'twoColumn', columns: [
          { // Left Column
            blocks: [
              { type: 'paragraph', content: 'One of the biggest challenges was balancing the needs of long-time, loyal customers who were accustomed to the old layout with the goal of attracting a new, younger demographic.' },
              { type: 'paragraph', content: 'We had to make bold design decisions while ensuring the new interface remained intuitive for all user segments. Another challenge was migrating a massive product catalog without disrupting the user experience.'}
            ]
          },
          { // Right Column
            blocks: [
              { type: 'image', src: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=2070&auto=format&fit=crop', caption: 'Mapping user journeys helped bridge the gap between old and new.' }
            ]
          }
        ]}
      ]
    },
    {
      title: 'Competitive Analysis (Table Example)',
      blocks: [
        { type: 'table', headers: ['Feature', 'Competitor A', 'Competitor B', 'Our Solution'], rows: [
          ['Guest Checkout', 'Yes', 'No', 'Yes (Streamlined)'],
          ['Mobile Performance', 'Good', 'Average', 'Excellent'],
          ['Personalization', 'Basic', 'Advanced', 'AI-driven'],
          ['Return Process', 'Complex', 'Easy', 'One-click returns']
        ]}
      ]
    },
    {
      title: 'The Solution',
      blocks: [
        { type: 'paragraph', content: 'The final design introduced a streamlined, single-page checkout, a visually-driven mega menu for intuitive navigation, and personalized product recommendations. We implemented a clean, minimalist UI with high-quality product imagery at its core. The entire experience was rebuilt from the ground up to be fully responsive and optimized for mobile performance.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1586923838499-199b06b88b0a?q=80&w=2070&auto=format&fit=crop', caption: 'The final, clean user interface.' }
      ]
    },
    {
      title: 'Results & Impact',
      blocks: [
        { type: 'metricCards', metrics: [
            { value: '+40%', label: 'Increase in Conversion Rate' },
            { value: '-25%', label: 'Reduction in Cart Abandonment' },
            { value: '+85%', label: 'Growth in Mobile Revenue' },
            { value: '75%', label: 'Faster Checkout Time' },
            { value: '+2.5', label: 'Increase in CSAT Score' },
            { value: '-40%', label: 'Reduction in Support Calls' },
        ]}
      ]
    },
    {
      title: 'Key Learnings',
      blocks: [
        { type: 'list', style: 'unordered', items: [
          "The power of iterative testing: Early and frequent usability tests with low-fidelity prototypes saved us countless hours of development time by catching design flaws early.",
          "Mobile-first is non-negotiable: Designing for the smallest screen first forced us to prioritize features and create a more focused, efficient user experience that scaled beautifully to larger devices.",
          "A design system is a life-saver: Investing time upfront to build a comprehensive design system created consistency and dramatically sped up the development and design process for new features post-launch."
        ]}
      ]
    }
  ]
};
