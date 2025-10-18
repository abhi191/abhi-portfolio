import type { Project } from '../types';

export const saasRuntimeProject: Project = {
  id: 4,
  slug: 'saas-runtime-app-centric-vision',
  company: 'Google Cloud / One Producer Stack',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'Aligning the App-centric Vision for SaaS Runtime and Cloud App Platform',
  description: 'A product strategy project to drive a unified, app-centric vision across the Google Cloud Application Platform ecosystem, aligning SaaS Runtime, ADC, and App Hub.',
  metrics: [
    { value: "Q1 '26", label: 'GA Target' },
    { value: '3+', label: 'Products Aligned' },
    { value: 'Approved', label: 'Leadership Vision' },
  ],
  imagePosition: 'left',

  // --- Detailed page content ---
  heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  overview: 'SaaS Runtime is a fully managed service designed for Designing, Deploying, and Operating SaaS at Scale. The service provides key foundations such as Deployment, Rollout, and Feature Flags. The context of this project was to drive an App-centric Vision across the broader Cloud Application Platform ecosystem. This meant aligning SaaS Runtime with the Application Design Center (ADC) for design and templating, and with App Hub/Cloud Hub for registration and management. The strategic goal was to improve application-level visibility and management for SaaS Producers.',
  details: [
    { label: 'Role', value: 'Lead design, Service Management' },
    { label: 'Timeline', value: "Q4 2024 – Q1 2026 (GA Target)" },
    { label: 'Type', value: 'Product Strategy, Architecture & Integration' },
    { label: 'Client', value: 'SaaS Runtime, ADC, App Hub' },
  ],
  
  sections: [
    {
      title: 'The Problem: A Fragmented Producer Experience',
      blocks: [
        { type: 'paragraph', content: 'The core business and user problem was creating a unified, cohesive user experience for SaaS producers spanning product design, deployment, and management across multiple Google Cloud components (ADC, SaaS Runtime, App Hub).' },
        { type: 'paragraph', content: 'A key focus area was identifying emerging user needs and goals to align on a common app-centric narrative. This was necessary to clearly define how producers would design their app templates in ADC, deploy them at scale using SaaS Runtime, and subsequently manage them using App Hub and Cloud Hub.' }
      ]
    },
    {
      title: 'My Role & Responsibilities',
      blocks: [
        { type: 'paragraph', content: "My role was to **Lead design for Service Management** as part of the One Producer Stack product area. I was a core member of the SaaS Runtime Core Team, alongside Product Managers (Adarsh Seetharam, Praveen Rajagopalan, Jerzy Forcylarz) and Engineering leadership." },
        { type: 'paragraph', content: "My responsibilities included iterating and improving mocks for the SaaS Runtime platform to drive product vision forward. The development entry for this integrated vision was planned for October 8th, with General Availability (GA) of the App-centric MVP targeted for Q1 '26." }
      ]
    },
    {
      title: 'Research & Defining the Journey',
      blocks: [
        { type: 'paragraph', content: 'The approach was heavily guided by cross-functional collaboration and alignment rather than initial primary user research, as the goal was to consolidate product architecture. The research involved defining detailed Customer Usage Journeys (CUJs) across the various surfaces.' },
        { type: 'list', style: 'unordered', items: [
          '**Onboarding/Setup** (SaaS Runtime).',
          '**Design** (ADC): designing a new SaaS App or importing existing Terraform (BYOT).',
          '**Scale** (SaaS Runtime, ADC): deploying the SaaS App at scale across tenants.',
          '**Deploy/Registration** (SaaS Runtime, App Hub, Cloud Hub, ADC): registering services and workloads in App Hub to leverage app-centric experiences (FinOps, Health).'
        ]}
      ]
    },
    {
        title: 'Navigating Inter-Team Tensions',
        blocks: [
            { type: 'paragraph', content: 'The key tensions were largely inter-team and product-direction-related. Achieving consensus across ADC, App Hub, and SaaS Runtime stakeholders was complex. This cross-product alignment was identified by leadership as a priority, even potentially superseding immediate urgent customer needs.'},
            { type: 'paragraph', content: "Furthermore, achieving the app-centric goal required introducing a new abstraction layer, `==SaaS App Kind==`, on top of the existing 'Unit Kind' data model to ensure compatibility with App Hub ingestion. This data model change sparked internal debate among User Technical Leads (UTLs), leading to the consensus `==yellow:not to expose the term on the UI==` to avoid user confusion and costly API changes."}
        ]
    },
    {
        title: 'Approach: Driving Consensus Through Visualization',
        blocks: [
            { type: 'paragraph', content: 'My approach focused on driving consensus and visualization of the end-to-end user journey:'},
            { type: 'list', style: 'ordered', items: [
                '**Alignment:** Ensured the Data Model and North Star product positioning were aligned across ADC, EasySaaS, and App Hub.',
                '**Collaboration:** Held cross-functional collaboration, design workshops, and co-design engagements with ADC and App Hub stakeholders to align on needs. This included two 3-hour engineering workshops focused on mapping sequence diagrams for front/back/API interactions.',
                '**Prototyping:** Created and iteratively refined MVP mocks to demonstrate the entire flow to stakeholders and executive leadership (Brad review).'
            ]}
        ]
    },
    {
        title: 'Design Output: The Unified Producer Journey',
        blocks: [
            { type: 'paragraph', content: 'The designs illustrated the producer journey, which begins in SaaS Runtime:'},
            { type: 'list', style: 'ordered', items: [
                '**Define SaaS Offering:** Producer defines the offering details, regions, and artifact registry location.',
                '**Template Selection/Creation:** Producer selects an App template from ADC or imports existing Terraform (BYOT). This involves a potential redirect to ADC to design a composite application template.',
                '**Finalize in SaaS Runtime:** Producer selects the right template revision and configures associated SaaS Runtime resources (like Unit Kind and release variables).',
                '**Deployment & Registration:** Deploying the SaaS instance, which creates/updates and registers deployed services and workloads into App Hub.'
            ]}
        ]
    },
    {
        title: 'Outcome: Leadership Alignment & A Clear Roadmap',
        blocks: [
            { type: 'paragraph', content: "The cross-functional effort was highly successful, leading to leadership approval for the unified App-centric vision, notably securing approval from Michael Bachman, Ines Envid, and Anna Berenberg. This success and dedication to cross-functional alignment were explicitly recognized with a ==green:spot bonus==." },
            { type: 'paragraph', content: "The resulting product roadmap shows key capabilities (Design, Deploy, and Operate SaaS Apps with integrations) scheduled for GA in Q1 '26."}
        ]
    },
    {
        title: 'Key Metrics for GA',
        blocks: [
            { type: 'paragraph', content: 'While quantitative data is not yet available for this future launch, the strategy aligns with metrics tracked by the SaaS Runtime Measurement Program.'},
            { type: 'metricCards', metrics: [
                { value: 'Adoption Metrics', label: 'Successful completion of cross-product CUJs', color: 'blue'},
                { value: 'Exposure Metrics', label: 'App Hub page views & customer navigation paths', color: 'blue'},
                { value: 'Engagement Metrics', label: 'Cross-interface resource creation actions', color: 'blue'},
            ]}
        ]
    },
    {
        title: 'Key Learnings',
        blocks: [
            { type: 'paragraph', content: 'Successfully driving strategic alignment across multiple independent product teams (ADC, App Hub, SaaS Runtime) is a monumental effort. It reinforced the importance of clear, visual documentation (sequence diagrams and UX flows) to bridge the communication gap between engineering/PMs and user needs.'},
            { type: 'paragraph', content: 'The design work was integral to resolving the data model conflict by opting to abstract technical jargon ("SaaS App Kind") from the UI where possible, prioritizing the user\'s mental model.'}
        ]
    }
  ]
};