import type { Project } from '../types';

export const designVelocityAmplifiedProject: Project = {
  id: 10,
  slug: 'design-velocity-amplified',
  company: 'Google Cloud',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'Design process improvements with AI tools',
  description: 'Ideation and design process improvements with AI-Driven Prototyping and helping stakeholders align on the product vision to deliver maximum user value in minimum amount of time',
  metrics: [
    { value: '94%', label: 'Time Reduction' },
    { value: '4 Hours', label: 'AI Prototype Time' },
    { value: 'vs 3 Days', label: 'Manual Est.' },
  ],
  showMetricsOnCard: false,
  imageUrl: '/images/projects/design-velocity-amplified/image.png',
  imagePosition: 'right',

  // --- Detailed page content ---
  heroImage: '/images/projects/design-velocity-amplified/image.png',
  overview: "When working on the Feature Flags experience for SaaS Runtime, I faced a major bottleneck with a component we needed that didn’t exist in our design system. Building it manually in Figma would have taken around three days. To move faster, I used an AI-driven prototyping approach by design and ideations with vibecoding, leveraging Google AI Studio to create interactive prototypes in just four hours - a 94% reduction in time.",
  details: [
    { label: 'Focus', value: 'AI in Design, Prototyping' },
    { label: 'Tool used', value: 'Google AI Studio' },
    { label: 'UX value', value: 'DesignOps, UX Leadership' },
  ],
  
  sections: [
    {
      title: 'Context',
      blocks: [
        { type: 'paragraph', content: "A key part of the SaaS Runtime experience—the CEL Expression Builder for Feature Flags—was missing from our design system. It was a complex component with dynamic logic, nested conditions, and multiple interactive states." },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image.png', isExpandable: true }
      ]
    },
    {
      title: 'The Problem: Prototyping Complex UI Quickly',
      blocks: [
        { type: 'paragraph', content: "The main challenge was ==red:visualizing and validating a complex, logic-heavy component efficiently==." },
        { type: 'list', style: 'unordered', items: [
            "A dedicated Figma component was not available in the design system for the CEL builder.",
            "Manual mocks couldn't capture nested interactions or multiple logic paths and would take a lot of time and effort to convey different use cases.",
            "Collaborating with engineering to make a small prototype would not be possible as we had limited bandwidth and engineering were already occupied with a lot of backlogs already."
        ]},
        { type: 'paragraph', content: "These constraints made traditional design methods too slow for our product timeline." }
      ]
    },
    {
        title: 'Impact',
        blocks: [
          
           { type: 'metricCards', metrics: [
            { value: '~3 days', label: 'Estimated manual prototyping time (limited interactions)', color: 'red' },
            { value: '~4 hours', label: 'Vibecoded prototype with all permutations and use cases.', color: 'green' },
        ]}
        ]
    },
    {
      title: 'Process: Step-by-Step Prompting',
      blocks: [
        { type: 'paragraph', content: "I started by building at the atomic level, then layered complexity step by step using screenshots and guided language." },
        { type: 'heading', level: 4, content: '1. Created a simple split button.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 1.png', isExpandable: true },
        { type: 'heading', level: 4, content: '2. Used reference screenshots to show AI how I wanted it to behave.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 2.png', isExpandable: true },
        { type: 'heading', level: 4, content: '3. Added conditional logic with operators and values.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 3.png', isExpandable: true },
        { type: 'heading', level: 4, content: '4. Introduced AND/OR conditions to simulate real user flows.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 4.png', isExpandable: true },
        { type: 'heading', level: 4, content: '5. Expanded to nested grouped conditions and highlighted regions for AI to focus on.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 5.png', isExpandable: true },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 6.png', isExpandable: true },
        { type: 'heading', level: 4, content: '6. Added advanced options like “Copy, Edit, Delete” and default field values to improve iteration speed.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 7.png', isExpandable: true },
        { type: 'heading', level: 4, content: '7. Layered in more complex nested interactions to validate full logic coverage.' },
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 8.png', isExpandable: true },
      ]
    },
    {
      title: 'Key Takeaways',
      blocks: [
        { type: 'list', style: 'unordered', items: [
            "Use screenshots as step-by-step guidance for AI.",
            "Start with basic components, then progressively add complexity.",
            "Use clear, simple language and examples to communicate behavior. Even annotating would greatly help."
        ]}
      ]
    },
    {
      title: 'Outcomes',
      blocks: [
        { type: 'paragraph', content: "When I shared the working prototype with PMs and engineers, they ==red:realized how complex the builder could get in real use==. This ==green:insight led to immediate UX improvements==:" },
        { type: 'list', style: 'unordered', items: [
            "Introduced a **Simple / Advanced mode** toggle for different user types.",
            "Simplified the default flow for common use cases."
        ]},
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 9.png', isExpandable: true }
      ]
    },
    {
      title: 'Bonus: Scaling the Impact',
      blocks: [
        { type: 'paragraph', content: "To help other designers move faster, I documented my process, created an internal guide and helped other designers to adopt this approach for faster decision making:" },
        { type: 'list', style: 'unordered', items: [
            "I created a **Vibecoding Deployment Guide** for hosting prototypes on Google Cloud",
            "Tutorials for using screenshots and markdown annotations to improve AI responses"
        ]},
        { type: 'image', src: '/images/projects/design-velocity-amplified/image 10.png', isExpandable: true },
        { 
          type: 'quote', 
          text: 'These learnings even influenced updates in Google AI Studio, encouraging markdown and annotation support for better design guidance.', 
          //author: 'Jane Doe, Head of Product',
          color: 'purple'
        },
        { type: 'image', src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/annotation.gif', caption:'I suggested a new feature and shared my process, which helped inform the release of annotations feature now available in Google AI Studio.' },
        
       // { type: 'paragraph', content: "These learnings even influenced updates in **Google AI Studio**, encouraging markdown and annotation support for better design guidance." }
      ]
    },
    {
      title: 'Reflection',
      blocks: [
        { type: 'paragraph', content: "This project showed me how AI can truly **amplify design velocity** while enhancing creativity and collaboration." },
        { type: 'paragraph', content: "Next, I plan to:" },
        { type: 'list', style: 'unordered', items: [
            "Standardize AI-powered prototyping for other complex UX systems",
            "Explore AI-assisted insights in SaaS Runtime post-GA",
            "Continue mentoring peers on integrating AI into design workflows"
        ]}
      ]
    },
  ]
};
