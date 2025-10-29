import type { Project } from '../types';
import { GoogleLogo, VMWareLogo, SAPLogo, CrestaLogo } from '../components/icons';

export const designwithAI: Project = {
  id: 10,
  slug: 'design-with-ai',
  password: 'portfolio2025',
  company: ' ',
  companyLogoUrl: "data:image/svg+xml,%3Csvg%20%20%20%20%20%20%20%20viewBox%3D%220%200%20272%2092%22%20%20%20%20%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20%20%20%20%20role%3D%22img%22%20%20%20%20%20%20%20%20aria-label%3D%22Google%22%20%20%20%20%3E%3Cpath%20fill%3D%22%23EA4335%22%20d%3D%22M115.75%2047.18c0%2012.77-9.99%2022.18-22.25%2022.18s-22.25-9.41-22.25-22.18C71.25%2034.32%2081.24%2025%2093.5%2025s22.25%209.32%2022.25%2022.18zm-9.74%200c0-7.98-5.79-13.44-12.51-13.44S80.99%2039.2%2080.99%2047.18c0%207.9%205.79%2013.44%2012.51%2013.44s12.51-5.55%2012.51-13.44z%22%2F%3E%3Cpath%20fill%3D%22%23FBBC05%22%20d%3D%22M163.75%2047.18c0%2012.77-9.99%2022.18-22.25%2022.18s-22.25-9.41-22.25-22.18c0-12.85%209.99-22.18%2022.25-22.18s22.25%209.32%2022.25%2022.18zm-9.74%200c0-7.98-5.79-13.44-12.51-13.44s-12.51%205.46-12.51%2013.44c0%207.9%205.79%2013.44%2012.51%2013.44s12.51-5.55%2012.51-13.44z%22%2F%3E%3Cpath%20fill%3D%22%234285F4%22%20d%3D%22M209.75%2026.34v39.82c0%2016.38-9.66%2023.07-21.08%2023.07-10.75%200-17.22-7.19-19.66-13.07l8.48-3.53c1.51%203.61%205.21%207.87%2011.17%207.87%207.31%200%2011.84-4.51%2011.84-13v-3.19h-.34c-2.18%202.69-6.38%205.04-11.68%205.04-11.09%200-21.25-9.66-21.25-22.09%200-12.52%2010.16-22.26%2021.25-22.26%205.29%200%209.49%202.35%2011.68%204.96h.34v-3.61h9.25zm-8.56%2020.92c0-7.81-5.21-13.52-11.84-13.52-6.72%200-12.35%205.71-12.35%2013.52%200%207.73%205.63%2013.36%2012.35%2013.36%206.63%200%2011.84-5.63%2011.84-13.36z%22%2F%3E%3Cpath%20fill%3D%22%2334A853%22%20d%3D%22M225%203v65h-9.5V3h9.5z%22%2F%3E%3Cpath%20fill%3D%22%23EA4335%22%20d%3D%22M262.02%2054.48l7.56%205.04c-2.44%203.61-8.32%209.83-18.48%209.83-12.6%200-22.01-9.74-22.01-22.18%200-13.19%209.49-22.18%2020.92-22.18%2011.51%200%2017.14%209.16%2018.98%2014.11l1.01%202.52-29.65%2012.28c2.27%204.45%205.8%206.72%2010.75%206.72%204.96%200%208.4-2.44%2010.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95%200-11.84%204.37-11.59%2012.93z%22%2F%3E%3Cpath%20fill%3D%22%234285F4%22%20d%3D%22M35.29%2041.41V32H67c.31%201.64.47%203.58.47%205.68%200%207.06-1.93%2015.79-8.15%2022.01-6.05%206.3-13.78%209.66-24.02%209.66C16.32%2069.35.36%2053.89.36%2034.91.36%2015.93%2016.32.47%2035.3.47c10.5%200%2017.98%204.12%2023.6%209.49l-6.64%206.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86%200-24.7%2011.17-24.7%2025.03%200%2013.86%2010.84%2025.03%2024.7%2025.03%208.99%200%2014.11-3.61%2017.39-6.89%202.66-2.66%204.41-6.46%205.1-11.65l-22.49.01z%22%2F%3E%3C%2Fsvg%3E",
  title: 'Design process improvements with AI tools',
  description: 'Ideation and design process improvements with AI-Driven Prototyping and helping stakeholders align on the product vision to deliver maximum user value in minimum amount of time',
  metrics: [
    { value: '94%', label: 'Time Reduction' },
    { value: '4 Hours', label: 'AI Prototype Time' },
    { value: 'vs 3 Days', label: 'Manual Est.' },
  ],
  showMetricsOnCard: false,
  imageUrl: '/images/projects/design-with-ai/ai-card.png',
  imagePosition: 'left',

  // --- Detailed page content ---
  heroImage: '/images/projects/design-with-ai/ai-card.png',
  // Hide the hero image on the case study page for this project
  // (useful if you prefer the page to begin with the overview and sections)
  hideHero: true,
  overview: "When working on the Feature Flags experience for SaaS Runtime, I faced a major bottleneck with a component we needed that didn’t exist in our design system. Building it manually in Figma would have taken around three days. To move faster, I used an AI-driven prototyping approach by design and ideations with vibecoding, leveraging Google AI Studio to create interactive prototypes in just four hours - a 94% reduction in time.",
  details: [
    { label: 'Focus', value: 'AI in Design, Prototyping' },
    { label: 'Tool used', value: 'Google AI Studio' },
    { label: 'UX value', value: 'DesignOps, UX Leadership' },
  ],
  gradientBackgroundColor: 'blue',
  
  sections: [
    {
      title: 'Context',
      blocks: [
        { type: 'paragraph', content: "A key part of the SaaS Runtime experience—the CEL Expression Builder for Feature Flags—was missing from our design system. It was a complex component with dynamic logic, nested conditions, and multiple interactive states." },
        { type: 'image', src: '/images/projects/design-with-ai/image.png', isExpandable: true }
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
      title: 'AI Solution: Vibecoding with Google AI Studio',
      blocks: [
        { type: 'paragraph', content: "Some reasons for choosing Google AI studio:" },
        { type: 'list', style: 'unordered', items: [
            "Flexibility to rapidly iterate on complex interactions.",
            "Deployable prototypes that stakeholders could interact with directly.",
            "Easy to share and gather feedback from cross-functional teams."
        ]},
       { type: 'carousel', slides: [
            { src: '/images/projects/saas-runtime/image-16.png', caption:'Prompting with Google AI studio for prototyping' },
            { src: '/images/projects/saas-runtime/image-17.png', caption:'Prompting with Google AI studio for prototyping' },
        ] }
      ]
    },
    {
      title: 'Process: Step-by-Step Prompting',
      blocks: [
        { type: 'paragraph', content: "I started by building at the atomic level, then layered complexity step by step using screenshots and guided language." },
        { type: 'heading', level: 4, content: '1. Created a simple split button.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-1.png', isExpandable: true },
        { type: 'heading', level: 4, content: '2. Used reference screenshots to show AI how I wanted it to behave.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-2.png', isExpandable: true },
        { type: 'heading', level: 4, content: '3. Added conditional logic with operators and values.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-3.png', isExpandable: true },
        { type: 'heading', level: 4, content: '4. Introduced AND/OR conditions to simulate real user flows.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-4.png', isExpandable: true },
        { type: 'heading', level: 4, content: '5. Expanded to nested grouped conditions and highlighted regions for AI to focus on.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-5.png', isExpandable: true },
        { type: 'image', src: '/images/projects/design-with-ai/image-6.png', isExpandable: true },
        { type: 'heading', level: 4, content: '6. Added advanced options like “Copy, Edit, Delete” and default field values to improve iteration speed.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-7.png', isExpandable: true },
        { type: 'heading', level: 4, content: '7. Layered in more complex nested interactions to validate full logic coverage.' },
        { type: 'image', src: '/images/projects/design-with-ai/image-8.png', isExpandable: true },
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
        { type: 'image', src: '/images/projects/design-with-ai/image-9.png', isExpandable: true }
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
        { type: 'image', src: '/images/projects/design-with-ai/image-10.png', isExpandable: true },
        { 
          type: 'quote', 
          text: 'These learnings even influenced updates in [Google AI Studio](https://blog.google/technology/developers/introducing-vibe-coding-in-google-ai-studio/), encouraging markdown and annotation support for better design guidance.', 
          //author: 'Jane Doe, Head of Product',
          color: 'purple'
        },
        { type: 'image', src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/annotation.gif', caption:'I suggested a new feature and shared my process, which helped inform the release of annotations feature now available in [Google AI Studio](https://blog.google/technology/developers/introducing-vibe-coding-in-google-ai-studio/).' },
        
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
