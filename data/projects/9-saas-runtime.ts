import type { Project } from '../types';

export const saasRuntimeProjectV2: Project = {
  id: 9,
  slug: 'saas-runtime',
  company: 'Google Cloud',
  companyLogoUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.59L5.84 9.43c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3Cpath d='M1 1h22v22H1z' fill='none'/%3E%3C/svg%3E",
  title: 'SaaS Runtime — Launch of a New Vertical of GCP',
  description: 'Led the 0–1 design for the public preview of SaaS Runtime, a new GCP product. Overcame a 70% onboarding drop-off by redesigning the user flow, simplifying complex terminology, and driving cross-product integrations.',
  metrics: [
    { value: '870+', label: 'Unique Users' },
    { value: '400+', label: 'Deployments' },
    { value: '80%', label: 'Bug Resolution' },
  ],
  showMetricsOnCard: false,
  imageUrl: '/images/projects/saas-runtime/image-15.png',
  imagePosition: 'left',
  
  heroImage: '/images/projects/saas-runtime/image-15.png',
  overview: 'SaaS Runtime is a comprehensive, fully-managed service lifecycle management platform. It empowers Service Providers to efficiently design, deploy, and operate Software as a Service (SaaS) solutions at scale by automating complex infrastructure operations.',
  details: [
    { label: 'Role', value: 'Lead Designer (0-1)' },
    { label: 'Timeline', value: 'Oct 2024 – Apr 2025' },
    { label: 'Scope', value: '0-1 Design, Research, Strategy' },
  ],

  sections: [
   /* {
      title: 'My Role',
      blocks: [
        { type: 'paragraph', content: '**Lead Designer** — 0–1 design, research, and stakeholder alignment for the successful public preview of the product.' },
        { type: 'paragraph', content: 'Contributed to integrations with multiple GCP products, leadership buy-in, design process improvements using AI, UI testing, and refinements.' },
        { type: 'paragraph', content: '**Timeline:** October 2024 – April 2025' },
      ],
    }, */
    {
      title: 'Context',
      blocks: [
        { type: 'paragraph', content: 'SaaS Runtime is a comprehensive, fully-managed service lifecycle management platform. It empowers Service Providers to efficiently design, deploy, and operate Software as a Service (SaaS) solutions at scale.' },
        { type: 'paragraph', content: 'By automating complex infrastructure operations, SaaS Runtime enables service producers to prioritize their core business logic.' },
        { type: 'paragraph', content: 'SaaS Runtime was launched in public preview at Google Cloud Next ’25, featuring capabilities across each service phase to simplify service management at scale.' },
        { type: 'image', src: '/images/projects/saas-runtime/sr-1.png', isExpandable: true },
      ],
    },
 /*   {
      title: 'Value Proposition for SaaS Runtime',
      blocks: [
        { type: 'heading', level: 3, content: 'Key Benefits for Producers' },
        { type: 'list', style: 'ordered', items: [
            'Easily design SaaS Apps using the Application Design Center (ADC) and Gemini-assisted tools such as Gemini CLI.',
            'Auto-register services and workloads in App Hub to unlock App-centric experiences across GCP.',
            'Deploy and track SaaS instances associated with application templates across tenants.',
            'Bake in GCP best practices with recommended SaaS Application templates.'
        ] },
        { type: 'heading', level: 3, content: 'Benefits for Consumers' },
        { type: 'list', style: 'ordered', items: [
            'Discover and group first-party and third-party services in App Hub for App-centric experiences (e.g. App Monitoring, Cost Explorer).',
            '*(Future)* Use 3P services in ADC’s design canvas when designing new applications.',
            '*(Future)* Enable one-click self-service onboarding via Marketplace, keeping users within GCP.'
        ] },
      ],
    }, */
    {
      title: 'The Problem',
      blocks: [
        { type: 'paragraph', content: 'Many users struggled to set up their SaaS applications due to confusing terminology and complex requirements — leading to ==red: 70% drop-off before completion==.' },
        { type: 'paragraph', content: 'This risked early adoption and threatened the success of SaaS Runtime.' },
        { type: 'list', style: 'unordered', items: [
            'Onboarding barriers caused high abandonment rates.',
            'Abstract terminology and complex prerequisites (e.g. API enablement, permissions).',
            'The data model didn’t align with the user’s mental model.'
        ] },
      ],
    },
    {
      title: 'My Role & Approach',
      blocks: [
        { type: 'paragraph', content: 'As the lead UX designer, I led an **Impact-First strategy** to:' },
        { type: 'list', style: 'unordered', items: [
            'Simplify onboarding and normalize terminology.',
            'Align engineering and product around applications rather than infrastructure.',
            'Establish proactive design operations (“Fixit Weeks”) to ensure UI stability and compliance for the public preview.'
        ] },
      ],
    },
    {
      title: 'Design Workshop',
      blocks: [
        { type: 'paragraph', content: 'I orchestrated a **3-day design workshop** to align stakeholders on the MVP vision for SaaS Runtime’s public preview.' },
        { type: 'paragraph', content: '**Workshop outcomes:**' },
        { type: 'list', style: 'unordered', items: [
            'Defined the information architecture.',
            'Mapped dependencies between key data models.',
            'Connected user intent with technical constructs.',
            'Scoped the MVP to deliver maximum user value within constraints.'
        ] },
        { type: 'image', src: '/images/projects/saas-runtime/image-1.png', caption: 'Outcomes of the 3-day design workshop.', isExpandable: true },
      ],
    },
    {
      title: 'UX Considerations',
      blocks: [
        { type: 'list', style: 'unordered', items: [
            '==green:Tightly scoped:== Worked within limited timelines and resources.',
            '==green:Unblock developers:== Iterated rapidly to validate workflows.',
            '==green:Onboarding improvements:== Simplified concepts and terminology.',
            '==green:Extensibility:== Ensured UI was future-proof without large refactors.'
        ] },
      ],
    },
    {
      title: 'Deliverables',
      blocks: [
        { type: 'heading', level: 4, content: 'Improved onboarding/ product learning flows:' },
        { type: 'quote', text: 'Clear CTAs, guided steps, and visual “How it works” diagrams helped users understand both the system and mental models.', color: 'blue' },
        
        { type: 'carousel', slides: [
            { src: '/images/projects/saas-runtime/image-2.png', caption:'Clear CTA’s on how to start using the product' },
            { src: '/images/projects/saas-runtime/image-3.png', caption:'Step by step introduction of the steps to take with guided help' },
            { src: '/images/projects/saas-runtime/image-4.png', caption:'A how it works diagram to map the system data model to user’s mental modal.' },
            { src: '/images/projects/saas-runtime/image-5.png', caption:'Onboarding panel - list out the required steps vs optional steps to take advantage of the SaaS Runtime platform' },
        ] },
        
        { type: 'heading', level: 4, content: 'Self-serve experience' },
         { type: 'quote', text: 'Users were guided with contextual explanations, debugging tips, and observability dashboards to track system health.', color:'blue' },

        { type: 'carousel', slides: [
            { src: '/images/projects/saas-runtime/image-6.png', caption:'Explaining users whats happening, why its happening and how to debug in case of errors' },
            { src: '/images/projects/saas-runtime/image-7.png', caption:'Helpful visualisations and easy to digest information' },
            { src: '/images/projects/saas-runtime/image-8.png', caption:'Observability dashboard as a one stop view of system health and any alerts that might need triaging' },
            { src: '/images/projects/saas-runtime/image-9.png', caption:'UI building options via both UI and code based systems.' },
            { src: '/images/projects/saas-runtime/image-10.png', caption:'UI building options via both UI and code based systems.'  },
        ] },
       
        { type: 'heading', level: 4, content: 'Seamless multi-product integrations' },
        { type: 'quote', text: 'SaaS Runtime integrated with multiple GCP surfaces — including App Design Center and GCP Marketplace — offering both UI and code-based experiences.', color:'blue' },
        { type: 'carousel', slides: [
            { src: '/images/projects/saas-runtime/image-11.png', caption:'Integrating flows with App Design Center' },
            { src: '/images/projects/saas-runtime/image-12.png', caption:'Integrating flows with App Design Center' },
            { src: '/images/projects/saas-runtime/image-13.png', caption:'Integration with GCP marketplace' },
            { src: '/images/projects/saas-runtime/image-14.png', caption:'Integration with GCP marketplace' },
        ] }
        
      ],
    },
    {
      title: 'Impact',
      blocks: [
        { type: 'list', style: 'unordered', items: [
            '==green:Product Usage:== 870 unique users, 95 API activations.',
            '==green:Engagement:== 400+ deployments and 200+ rollouts during early adoption.',
            '==green:UI Quality:== Achieved **80% resolution** of high-priority UI bugs through the Fixit process.',
            '==green:Usability:== GUI consistently perceived as easier than CLI for onboarding and understanding product flows.'
        ] },
        { type: 'heading', level:4, content: 'User Feedback Highlights:' },
        { type: 'quote', text: '“This could be a real game changer… it actually simplifies a lot of work.”', author: 'ConvergeOne', color:'purple' },
        { type: 'quote', text: '“It’s structured, intuitive, and gently guides you to organize ahead of time.”', author: 'Pitney Bowes', color:'purple' },
      ],
    },
    {
      title: 'Retrospective & Future Vision',
      blocks: [
        { type: 'heading', level: 4, content: 'Key Learnings' },
        { type: 'list', style: 'unordered', items: [
            'The greatest challenge was balancing API constraints with user comprehension.',
            '**Design leadership must influence terminology early** to avoid UX friction.',
            'Collaborative design artifacts (UI compliance specs, App-centric flow maps) were vital for cross-team alignment.'
        ] },
        { type: 'heading', level: 4, content: 'What I Would Do Differently' },
        { type: 'paragraph', content: 'I would initiate formal UX vocabulary documentation earlier to unify terminology across PM and engineering while APIs were still evolving.' },
        
        {
          type: 'callToAction',
          title: 'SaaS Runtime launch at Google Cloud next',
          text: 'View the launch of SaaS Runtime at Google Cloud Next conference in April 2025',
          buttonText: 'View video',
          buttonUrl: 'https://www.youtube.com/watch?v=PVz_NKIXMUY',
          color: 'blue'
        },
      ],
    },
    
  ],
};
