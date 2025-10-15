import type { Project } from '../types';

export const oracleHealthcareProject: Project = {
  id: 3,
  slug: 'oracle-healthcare-mobile-app',
  password: 'healthapp',
  company: 'Oracle',
  companyLogoUrl: "data:image/svg+xml,%3Csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'%3E%3Ctitle%3EOracle%3C/title%3E%3Cpath d='M12.43 12.004c0 3.93-3.07 7.15-6.91 7.15v-3.57c1.9 0 3.44-1.6 3.44-3.58s-1.54-3.58-3.44-3.58v-3.57c3.84 0 6.91 3.22 6.91 7.15zm-1.04 7.15c-3.84 0-6.91-3.22-6.91-7.15s3.07-7.15 6.91-7.15V.004C5.02.004.5 4.874.5 12.004s4.52 11.99 10.89 11.99v-3.84zm11.23-7.15c0-3.93-3.07-7.15-6.91-7.15v3.57c1.9 0 3.44-1.6 3.44-3.58s-1.54 3.58-3.44 3.58v3.57c3.84 0 6.91-3.22 6.91-7.15zm1.04-7.15V.004C18.26.004 13.74 4.874 13.74 12.004s4.52 11.99 10.89 11.99v-3.84c-3.84 0-6.91-3.22-6.91-7.15s3.07-7.15 6.91-7.15z'/%3E%3C/svg%3E",
  title: 'Mobile App for Healthcare',
  description: 'Created a mobile application to help patients manage their medical records, appointments, and prescriptions in one secure place.',
  metrics: [
    { value: '50k+', label: 'Active Monthly Users' },
    { value: '4.8 ★', label: 'App Store Rating' },
    { value: '+25%', label: 'Patient Engagement' },
  ],
  heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d279f9?q=80&w=2070&auto=format&fit=crop', 
  role: 'Product Designer', 
  timeline: '8 Months', 
  overview: 'This project aimed to empower patients by giving them easy, secure access to their health information and a direct line of communication with their care providers.', 
  
  sections: [
    {
      title: 'The Problem',
      blocks: [
        { type: 'paragraph', content: 'Patients struggled to keep track of their appointments, medication schedules, and test results, often relying on paper records or multiple disconnected patient portals.' }
      ]
    },
    {
      title: 'Project Goals',
      blocks: [
        { type: 'list', style: 'ordered', items: [
          'Consolidate medical records into a single view.',
          'Simplify the appointment scheduling process.',
          'Increase medication adherence through reminders.'
        ]}
      ]
    },
    {
      title: 'My Design Process',
      blocks: [
        { type: 'paragraph', content: 'Given the sensitive nature of health data, the process started with a heavy focus on security and privacy best practices (HIPAA compliance). We co-designed features with a patient advisory group to ensure the app met real-world needs. The UI was designed with accessibility (WCAG 2.1 AA) as a top priority.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Challenges Faced',
      blocks: [
        { type: 'paragraph', content: 'Integrating with various electronic health record (EHR) systems, each with its own API and data format, was a major technical and design hurdle. Ensuring the app was simple enough for users who may be elderly or not tech-savvy was also a critical challenge.' }
      ]
    },
    {
      title: 'The Solution',
      blocks: [
        { type: 'paragraph', content: 'The app provides a clear timeline of a patient\'s health history, a simple "one-tap" appointment booking system, and intelligent prescription refill reminders. A secure messaging feature allows direct communication with doctors\' offices. All data is encrypted both in transit and at rest.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1620366299830-18a7d329d7de?q=80&w=1964&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Results & Impact',
      blocks: [
        { type: 'metricCards', metrics: [
          { value: '50k+', label: 'Active Monthly Users' },
          { value: '4.8 ★', label: 'App Store Rating' },
          { value: '+25%', label: 'Patient Engagement' },
        ]}
      ]
    },
    {
      title: 'Key Learnings',
      blocks: [
        { type: 'list', style: 'unordered', items: [
          'When designing for healthcare, trust and security are the most important features.', 
          'Involving end-users from the very beginning is crucial for creating a product that truly helps them.'
        ]}
      ]
    }
  ]
};