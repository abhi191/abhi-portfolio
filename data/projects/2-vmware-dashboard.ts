import type { Project } from '../types';

export const vmwareDashboardProject: Project = {
  id: 2,
  slug: 'vmware-saas-dashboard',
  password: 'saasdata',
  company: 'VMWare',
  companyLogoUrl: "data:image/svg+xml,%3Csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'%3E%3Ctitle%3EVMware%3C/title%3E%3Cpath d='M18.002 0h-5.08L6.04 16.558h5.077l1.804-4.89h5.08zm-5.077 24h5.078l6.88-16.558h-5.08L12.925 24z'/%3E%3C/svg%3E",
  title: 'SaaS Dashboard for Data Analytics',
  description: 'Designed a user-centric dashboard for a B2B SaaS product, enabling users to visualize and interact with complex data sets effortlessly.',
  metrics: [
    { value: '2X', label: 'Faster Task Completion' },
    { value: '9/10', label: 'User Satisfaction' },
    { value: '-30%', label: 'Support Tickets' },
  ],
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', 
  role: 'UX Designer', 
  timeline: '3 Months', 
  overview: 'A B2B SaaS company needed a dashboard redesign to reduce complexity and improve data discoverability for their non-technical user base.', 
  
  sections: [
    {
      title: 'The Problem',
      blocks: [
        { type: 'paragraph', content: 'Users felt overwhelmed by the density of data and lacked a clear path to find insights. This led to low adoption and high reliance on customer support.' }
      ]
    },
    {
      title: 'Project Goals',
      blocks: [
        { type: 'list', style: 'ordered', items: [
          'Simplify the main dashboard view.', 
          'Improve task completion time for key reports.', 
          'Reduce support tickets related to data finding.'
        ]}
      ]
    },
    {
      title: 'My Design Process',
      blocks: [
        { type: 'paragraph', content: 'The process involved stakeholder workshops to define key metrics, followed by card sorting exercises with users to create a more intuitive information architecture. Wireframes were tested to validate the new, simplified layouts.'},
        { type: 'image', src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Challenges Faced',
      blocks: [
        { type: 'paragraph', content: 'The primary challenge was accommodating the vast amount of data required by power users while still providing a simple entry point for novices. Technical limitations of the existing charting library also posed a constraint.' }
      ]
    },
    {
      title: 'The Solution',
      blocks: [
        { type: 'paragraph', content: 'The new dashboard features a customizable widget system, allowing users to tailor the view to their needs. A prominent global search and filtering system was introduced to make data more accessible. We created a progressive disclosure system, hiding advanced options until they are explicitly requested by the user.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Results & Impact',
      blocks: [
        { type: 'metricCards', metrics: [
          { value: '2X', label: 'Faster Task Completion' },
          { value: '9/10', label: 'User Satisfaction' },
          { value: '-30%', label: 'Support Tickets' },
        ]}
      ]
    },
    {
      title: 'Key Learnings',
      blocks: [
        { type: 'list', style: 'unordered', items: [
          'Customization is key for diverse user bases.', 
          'A powerful search can be more effective than a complex navigation structure.'
        ]}
      ]
    }
  ]
};