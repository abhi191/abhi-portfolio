import type { Project } from '../types';

export const featureFlagsCelProject: Project = {
  id: 6,
  slug: 'feature-flags-cel-builder-vibecoding',
  company: 'Google (Internal Feature Flags Team)',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'Feature Flags CEL Builder Prototyping using Vibecoding',
  description: 'A case study on improving design velocity by adopting an innovative prototyping method (Vibecoding) for a technically complex UI component.',
  metrics: [
    { value: '4 Hours', label: 'Prototyping Time' },
    { value: '~3 Days', label: 'Est. Figma Time' },
    { value: 'Identified', label: 'Product Complexity' },
  ],
  imagePosition: 'left',

  // --- Detailed page content ---
  heroImage: 'https://images.unsplash.com/photo-1517694712202-1428bc3835b3?q=80&w=2070&auto=format&fit=crop',
  overview: 'This case study focuses on improving design velocity and collaboration by adopting an innovative prototyping method for a technically complex UI component. The project involved implementing Feature Flags, which required introducing complex flag variants and conditions managed through a CEL builder component (Common Expression Language).',
  details: [
    { label: 'Role', value: 'UX Designer' },
    { label: 'Timeline', value: '2025' },
    { label: 'Type', value: 'Design Process Innovation' },
    { label: 'Client', value: 'Google (Internal Feature Flags Team)' },
  ],
  
  sections: [
    {
      title: 'The Problem: Prototyping Complex UI Quickly',
      blocks: [
        { type: 'paragraph', content: 'The core UX problem was the difficulty in prototyping a complex UI component quickly.' },
        { type: 'list', style: 'unordered', items: [
            'A dedicated Figma component was not available in the design system for the CEL builder.',
            'This made it challenging to convey the intricate interactions and potential complexities of multiple variants and nested conditions to stakeholders and testers.'
        ]}
      ]
    },
    {
      title: 'My Role & Responsibilities',
      blocks: [
        { type: 'paragraph', content: 'My role was as a **UX Designer** contributing to the Feature Flags workflow iteration. The specific Vibecoding effort was a rapid prototyping engagement executed in 2025 to unblock the design process.' }
      ]
    },
    {
      title: 'Research & Validation',
      blocks: [
        { type: 'paragraph', content: 'The intention was to create an interactive prototype to display how complicated conditions might look, allowing the team to anticipate user needs and required changes. The resulting prototype was immediately shown to the Flags Product Manager (PM) for feedback.' }
      ]
    },
    {
        title: 'The Tension: Logic vs. Tooling',
        blocks: [
            { type: 'paragraph', content: 'The primary tension was leveraging highly technical logic (complex flag conditions) within a user-friendly interface while facing time constraints and a gap in design system tooling.'}
        ]
    },
    {
        title: 'Approach: Prototyping in Code',
        blocks: [
            { type: 'paragraph', content: 'The solution was to pivot from traditional design tools (Figma) to a code-based prototyping method:'},
            { type: 'list', style: 'ordered', items: [
                '**Vibecoding Implementation:** Used Vibecoding to quickly build and test the CEL builder component, ensuring all possible interactions and variations were included.',
                '**Iterative Prototyping:** Started with atomic elements, gradually adding more complex interactions such as nested AND/OR conditions. Screenshots from existing components were used as guidance.',
                '**Deployment:** Created an internal interactive guide to deploy the applet on Cloud Run for easy sharing and user testing.'
            ]}
        ]
    },
    {
        title: 'Design Output: An Interactive Demo',
        blocks: [
            { type: 'paragraph', content: 'The output was a functional, interactive demo of the CEL Expression Builder (Feature flags implementation demo) showcasing complex condition groupings and variant configurations.'}
        ]
    },
    {
        title: 'Outcome: Accelerated Design & Simplified Strategy',
        blocks: [
            { type: 'paragraph', content: 'The project provided significant value by dramatically accelerating the design cycle and proactively identifying potential product complexity:'},
            { type: 'list', style: 'unordered', items: [
                '**Time Savings:** The component prototype was created in `==green:4 hours using Vibecoding==`, compared to an estimated `==~3 days required using Figma==` for a component with limited interactions.',
                '**Simplifying Complexity:** The prototype revealed that the feature flag management could become complicated quickly. This led directly to discussions with the PM regarding implementing a `==yellow:simple/advanced toggle==` to simplify the process for users.'
            ]}
        ]
    },
    {
        title: 'Key Metrics',
        blocks: [
            { type: 'table', 
              headers: ['Metric Focus', 'Data/Observation'], 
              rows: [
                ['Design Velocity/Efficiency', 'Time taken for prototyping a complex component reduced from estimated **~3 days to 4 hours**.'],
                ['Product Simplification Impact', 'The prototype prompted a product strategy change (debating simple/advanced toggles) aimed at reducing complexity before widespread launch.'],
              ]
            }
        ]
    },
    {
        title: 'Key Learnings',
        blocks: [
            { type: 'list', style: 'unordered', items: [
                '**Technical Literacy Empowers UX:** Leveraging technical expertise (using AI tools like Gemini CLI and Vibecoding for prototyping) enables designers to bypass tooling limitations and accelerate the feedback loop significantly.',
                '**Rapid Validation:** Building high-fidelity, interactive prototypes quickly ensures stakeholders and users immediately grasp complex concepts, leading to earlier identification of potential usability issues and product refinement (e.g., the need for simple/advanced toggles).',
                '**Community Contribution:** Documenting the innovative process (e.g., creating the applet deployment guide) benefits the wider UX community, enhancing internal reputation and teamwork.'
            ]}
        ]
    }
  ]
};