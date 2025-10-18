
import type { Project } from '../types';

export const saasOnboardingProject: Project = {
  id: 5,
  slug: 'saas-runtime-onboarding-redesign',
  company: 'Google Cloud (SaaS Runtime)',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'App-centric Vision & Onboarding Redesign for SaaS Runtime',
  description: 'A project to address critical usability gaps, confusing terminology, and onboarding friction in SaaS Runtime by redesigning the user flow and integrating with ADC and App Hub.',
  metrics: [
    { value: '30%', label: 'Funnel Conversion' },
    { value: '400+', label: 'Deployments Created' },
    { value: '-70%', label: 'User Drop-off' },
  ],
  imagePosition: 'left',

  // --- Detailed page content ---
  heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
  overview: 'SaaS Runtime is defined as a Fully Managed Service for Designing, Deploying, and Operating SaaS at Scale. It is part of the One Producer Stack (1PS) product suite, focused on enabling service management experiences for producers. The vision is to provide Application-level visibility and management for SaaS Producers. Service Producers (e.g., 1P, 2P, 3P ISVs like MongoDB or Kafka) use SaaS Runtime to create SaaS or APIs for service consumers. The initiative aims to align data models and product positioning across SaaS Runtime, Application Design Center (ADC), and App Hub to create a cohesive app-centric narrative.',
  details: [
    { label: 'Role', value: 'UX Designer, Service Management Lead' },
    { label: 'Timeline', value: 'Q4 2025 - Q1 2026' },
    { label: 'Type', value: 'Product Strategy & Integration' },
  ],
  
  sections: [
    {
      title: 'The Problem: Critical Usability Gaps',
      blocks: [
        { type: 'paragraph', content: 'The core problem centered on critical usability gaps in the SaaS Runtime workflow and onboarding experience.' },
        { type: 'list', style: 'ordered', items: [
            '**High Customer Drop-off:** Data showed a significant customer drop-off in the adoption funnel immediately after users defined a SaaS Offering. Only 30% of customers who defined a SaaS Offering subsequently created a Unit Kind.',
            '**Confusing Terminology:** The concepts of "Unit Kind" and "Unit" were confusing and abstract for new users, creating a significant barrier to understanding the SaaS Runtime data model. Research participants stated they did "Not fully grasp the concept of Unit Kind" and found the terminology unique to SaaS Runtime, necessitating a learning curve.',
            '**Lack of Context:** Users needed guidance to understand the product context and how their actions fit into the overall SaaS creation and management journey.'
        ]}
      ]
    },
    {
      title: 'My Role & Responsibilities',
      blocks: [
        { type: 'paragraph', content: '**Role:** UX Designer, leading design for Service Management as part of the One Producer Stack product area.' },
        { type: 'paragraph', content: '**Responsibilities:** My responsibilities included iteratively improving mocks, driving product vision, and enhancing cross-functional collaboration.' },
        { type: 'paragraph', content: '**Timeline:** Focused work leading up to a Dev entry planned for October 7th and GA targeted for Q1 \'26. The timeline involved heavy cross-functional collaboration, research planning, and continuous design iteration.'}
      ]
    },
    {
      title: 'Research: Understanding User Friction',
      blocks: [
        { type: 'paragraph', content: 'Customer insights significantly guided the design approach:'},
        { type: 'list', style: 'unordered', items: [
            '**Methodology:** Remote 75-minute interviews were conducted with 12 3P Service Producers (ISVs) using UI Mocks to walk them through critical journeys.',
            '**Key Findings:** Participants appreciated the structured architecture, finding the concept valuable for easing single-tenancy (ST) operation overhead. However, the concept of `==Unit Kind complexity==` was identified as a major friction point.',
            '**Guiding Insights:** Research recommended improving GUI documentation with ample examples, templates, and best practices. There was a need for consistent language throughout the UI and orienting users within the larger GCP service building journey. Initial findings indicated that a visualization (the "How It Works" diagram) helped participants better understand the context and goals of creating a Unit Kind.'
        ]}
      ]
    },
    {
        title: 'Navigating Tensions: UX vs. Technical Constraints',
        blocks: [
            { type: 'paragraph', content: 'The primary tension was between the desire to simplify the user experience (UX) and the constraints imposed by the technical architecture:'},
            { type: 'list', style: 'unordered', items: [
                '**API vs. UI Terminology:** Feedback strongly suggested changing confusing terms like "Unit kind" to concepts closer to user mental models (e.g., "SaaS component"). However, stakeholders noted that API changes at this stage would be very costly. Implementing only a UI change risked disorienting users due to conflicting terminology between the UI and API.',
                '**Internal Alignment:** Early on, there was misalignment between cross-functional teams, such as the feature flags team and the AppCentric EasySaaS vision, leading to gaps in proposed workflows.'
            ]}
        ]
    },
    {
        title: 'Approach: Mitigation Through Design & Collaboration',
        blocks: [
            { type: 'paragraph', content: 'The approach focused on mitigating friction through design and robust collaboration:'},
            { type: 'list', style: 'ordered', items: [
                '**Cross-Functional Collaboration:** Established engagement of cross-functional collaboration, design workshops, and co-design sessions with ADC and App Hub stakeholders to align on a common app-centric narrative. Workshops were held with PM and engineering teams to map out dependencies and capture sequence diagrams.',
                '**Onboarding Redesign:** Explored adopting the GKE onboarding pattern to direct users through the setup process. This involved utilizing an Onboarding Checklist on the side to give users a guide, track progress, and provide extra context about each required step (e.g., Define SaaS Offering, Create Unit Kind, Create Release).',
                '**Terminology Mitigation (UI vs. API):** Proposed moving forward with a revised UI flow that included a parent grouping of "SaaS management" to clearly indicate hierarchy. Suggested renaming "Unit Kind" to "SaaS component" and "Unit" to "SaaS component instances" in the UI to simplify explanation, while recognizing the API change risk. The strategy was to collect more user data on terminology confusion to inform API V2 changes later.',
                '**Integrating ADC:** Developed user flows to seamlessly transition producers from SaaS Runtime to the Application Design Center (ADC) to design their SaaS app templates, thereby leveraging a familiar application modeling tool.'
            ]}
        ]
    },
    {
        title: 'Design Output: A Guided, Integrated Flow',
        blocks: [
            { type: 'paragraph', content: 'The design output detailed the new end-to-end flow for Producers leveraging the app-centric integration:'},
            { type: 'list', style: 'unordered', items: [
                '**Onboarding Flow:** Utilized an integrated onboarding checklist within the SaaS Runtime overview to guide users through steps such as defining the SaaS offering, modeling the SaaS (creating a SaaS component), and provisioning.',
                '**ADC Integration:** Showed the workflow where a Producer selects a template or imports Terraform (BYOT) in SaaS Runtime, and is redirected to ADC to create or configure an Application Template. Designs highlighted pre-filled information and the selection of SaaS Runtime pre-defined configurations within ADC.',
                '**Releases Management:** Mocks illustrated the cross-linking of releases between SaaS Runtime and ADC, where releases are auto-created when the associated App template in ADC is updated.'
            ]}
        ]
    },
    {
        title: 'Outcome & Success',
        blocks: [
            { type: 'paragraph', content: 'The design work successfully led the strategic alignment of SaaS Runtime and ADC, resulting in:'},
            { type: 'list', style: 'unordered', items: [
                '**Securing Alignment:** The designer led the cross-functional effort to align SaaS Runtime and ADC strategies, resulting in a unified proposal that secured leadership approval.',
                '**Product Capabilities:** Enabled Producers to easily model SaaS Applications using Gemini Cloud Assisted tools (like ADC) and automatically register services and workloads into App Hub, unlocking app-centric experiences (e.g., cost explorer, maintenance).',
                '**Adoption:** SaaS Runtime had already been used by customers to create 400+ deployments and 200+ rollouts.'
            ]}
        ]
    },
    {
        title: 'Key Metrics: Data-Driven Design',
        blocks: [
            { type: 'paragraph', content: 'The SaaS Runtime Measurement Program proactively built metrics and data into the product development lifecycle.' },
            { type: 'table', 
              headers: ['Metric Category', 'Metric Focus', 'Data/Observation'], 
              rows: [
                ['Adoption Metrics (Funnel)', 'Tracking external customer progression through the product setup funnel.', '**Problem:** Significant drop-off from "Defined SaaS Offering" (53 users/6% conversion) to "Created Unit Kind" (16 users/2% conversion). **Only ~30% proceed.**'],
                ['Exposure Metrics', 'Tracking App Hub page views by time frame and customer navigation paths.', 'Exposure (External) was 826 users, with 674 active users (Internal).'],
                ['Engagement Metrics', 'Tracking cross-interface metrics and resource creation actions.', 'Customers created over 400 deployments and 200+ rollouts, indicating product utilization.'],
                ['Business/UX Metrics', 'Customer drop-off rate due to confusing terminology.', 'Initial findings link `==Unit Kind complexity==` directly to the significant drop-off. Addressing this is key to improving funnel conversion.'],
              ]
            }
        ]
    },
    {
        title: 'Key Learnings',
        blocks: [
            { type: 'paragraph', content: 'The key learning was the critical impact of conceptual clarity and the importance of data-driven iteration, particularly in enterprise tools:' },
            { type: 'list', style: 'unordered', items: [
                '**Jargon is a Barrier:** The complexity and abstraction of concepts like "Unit Kind" pose a major barrier to user adoption, evidenced by the funnel drop-off. Future iterations must prioritize simpler language or leverage more familiar tools (like ADC) to abstract underlying complexity.',
                '**Contextual Guidance is King:** Users need assistance to successfully onboard and require clear guidance (e.g., actionable errors, next steps, clear sidebar navigation) to understand how individual actions fit into the larger workflow.',
                '**Proactive Measurement:** Aligning a measurement program early (Q2-Q3 2024 for setup and strategy) ensures data is available to validate UX friction points (like the drop-off at Unit Kind creation) and inform strategic decisions for product iteration.'
            ]}
        ]
    }
  ]
};
