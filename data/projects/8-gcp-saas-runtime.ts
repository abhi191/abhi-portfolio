import type { Project } from '../types';

export const gcpSaaSRuntimeProject: Project = {
  id: 8,
  slug: 'gcp-saas-runtime-launch',
  company: 'Google Cloud',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'SaaS Runtime: Launching a New GCP Product Vertical',
  description: 'Led the 0-to-1 design for SaaS Runtime, a new GCP product. Overcame a 70% onboarding drop-off by redesigning the user flow, simplifying complex terminology, and driving cross-product integrations.',
  metrics: [
    { value: '400+', label: 'Deployments Created' },
    { value: '-70%', label: 'Onboarding drop-off' },
    { value: '870+', label: 'Unique Users' },
  ],
  imageUrl: '/project-assets/gcp-saas-runtime-launch/card-image.png',
  imagePosition: 'left',

  // --- Detailed page content ---
  heroImage: '/project-assets/gcp-saas-runtime-launch/hero-image.png',
  overview: "SaaS Runtime is a fully-managed GCP service for designing, deploying, and operating SaaS at scale. This project involved leading the 0-to-1 design for its public preview, tackling a 70% user drop-off in the initial onboarding funnel caused by abstract terminology and a complex setup process.",
  details: [
    { label: 'Role', value: 'Lead UX Designer (0-1)' },
    { label: 'Timeline', value: 'Oct 2024 - Apr 2025' },
    { label: 'Scope', value: 'Product Strategy, Research, Integrations' },
  ],
  
  sections: [
    {
      title: "The Challenge: A 70% Onboarding Cliff",
      blocks: [
        { type: 'paragraph', content: "Many users struggled to set up their SaaS applications because the initial steps involved confusing terms and complex requirements, causing 70% of them to give up before finishing. This threatened the success of our new SaaS Runtime product." },
        { type: 'list', style: 'unordered', items: [
            "High onboarding barrier causing a 70% drop-off before foundational architectural steps were complete.",
            "Abstract terminology and complex prerequisites (API enablement, permissions) risked undermining product adoption.",
            "The data model for the product did not match the conceptual model that users were used to."
        ]}
      ]
    },
    {
        title: "My Approach: Workshops & A Tightly Scoped MVP",
        blocks: [
            { type: 'paragraph', content: "As the lead UX designer, I drove an **Impact-First** strategy. I led and orchestrated a 3-day design workshop to align stakeholders on the what and why of the MVP, focusing on unblocking development with quick iterations and defining clear boundaries to provide maximum user value within a constrained timeline." },
            { type: 'image', src: '/project-assets/gcp-saas-runtime-launch/design-workshop.png', caption: "Workshop outcomes included a clear Information Architecture, dependency mapping, and a shared understanding of the user's journey.", isExpandable: true }
        ]
    },
    {
        title: "The Solution: A Guided & Integrated Experience",
        blocks: [
            { type: 'paragraph', content: "To combat the high drop-off rate, the first priority was to redesign the onboarding experience to be more guided and educational." },
            { type: 'carousel', slides: [
                { src: '/project-assets/gcp-saas-runtime-launch/onboarding-1-cta.png', caption: 'Clear calls-to-action guide users on how to start using the product.' },
                { src: '/project-assets/gcp-saas-runtime-launch/onboarding-2-steps.png', caption: 'A step-by-step introduction to the required setup, with contextual help.' },
                { src: '/project-assets/gcp-saas-runtime-launch/onboarding-3-how-it-works.png', caption: 'A \'How It Works\' diagram was introduced to map the system\'s data model to the user\'s mental model.' },
                { src: '/project-assets/gcp-saas-runtime-launch/onboarding-4-panel.png', caption: 'The onboarding panel acts as a checklist, outlining required and optional steps.' }
            ]},
            { type: 'fullWidthImage', src: '/project-assets/gcp-saas-runtime-launch/self-serve-visuals.png', caption: "The redesigned UI focused on helpful visualizations and easily digestible information to reduce cognitive load.", isExpandable: true },
            { type: 'twoColumn', columns: [
                {
                    blocks: [
                        { type: 'paragraph', content: "A key part of reducing friction was providing a self-serve experience. This included explaining to users what's happening, why it's happening, and how to debug in case of errors. We also integrated seamlessly with other GCP tools like App Design Center and Marketplace to create a cohesive journey." }
                    ]
                },
                {
                    blocks: [
                        { type: 'image', src: '/project-assets/gcp-saas-runtime-launch/integration-adc.png', caption: "Deep integration with App Design Center allows users to leverage existing application templates." }
                    ]
                }
            ]}
        ]
    },
    {
        title: "Impact & Validation",
        blocks: [
            { type: 'metricCards', metrics: [
                { value: '400+', label: 'Deployments Created' },
                { value: '200+', label: 'Rollouts Executed' },
                { value: '870', label: 'Unique Users (Public Preview)' },
                { value: '-70%', label: 'Reduction in User Drop-off', color: 'green' }
            ]},
            { type: 'quote', text: `"This could be a really good game changer for us... it's actually simplifies a lot of work."`, author: "ConvergeOne" },
            { type: 'quote', text: `"It's very structured. It's pretty intuitive. And it kind of in a very gentle way forces you to organize your thoughts and documents ahead of time."`, author: "Pitney Bowes" }
        ]
    },
    {
        title: "Retrospective & Future Vision",
        blocks: [
            { type: 'paragraph', content: "The tension between API constraints and user comprehension was the greatest challenge. This project taught me that **design leadership must actively pursue and influence architectural terminology** early in the development cycle to prevent user friction downstream." },
            { type: 'paragraph', content: "This foundational work paved the way for the **App-centric MVP GA milestone targeted for Q1 '26**. Future strategic opportunities focus on expanding application-centric control and visibility through deeper App Hub and Cloud Hub integrations." }
        ]
    }
  ]
};