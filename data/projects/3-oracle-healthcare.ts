import type { Project } from '../types';

export const sapHealthcareProject: Project = {
  id: 3,
  slug: 'sap-healthcare-mobile-app',
  password: 'healthapp',
  company: 'SAP',
  companyLogoUrl: "data:image/svg+xml,%3csvg width='455' height='225' xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='a' x2='0' y2='225' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%230ae' offset='0'/%3e%3cstop stop-color='%2305a' offset='1'/%3e%3c/linearGradient%3e%3cpath d='m455 0h-455v225h230' fill='url(%23a)'/%3e%3cpath d='m225 45v106l-39-106h-39l-33 88c-4-22-27-30-45-36-12-4-25-9-25-16 0-5 7-10 20-9 9 1 17 1 33 9l16-27c-15-8-35-12-51-12-19 0-35 6-45 16-7 7-10 16-11 26 0 14 5 24 16 32 9 6 20 10 30 13 13 4 23 8 23 15-1 9-11 11-18 11-12 1-22-1-37-10l-14 27c15 9 31 13 50 13 13 0 33-4 44-14l-2 9h38l7-17c15 4 32 5 47 0l5 17h68v-40h14c35 0 56-17 56-47 0-34-20-48-63-48zm-73 88 14-45h1l14 45c-10 3-20 3-29 0zm111-23v-36h10c13 0 23 4 23 17 0 14-10 19-23 19z' fill='%23fff'/%3e%3c/svg%3e",
  title: 'Mobile app for healthcare',
  description: 'Created a mobile application to help patients manage their medical records, appointments, and prescriptions in one secure place.',
  metrics: [
    { value: '50k+', label: 'Active monthly users' },
    { value: '4.8 ★', label: 'App store rating' },
    { value: '+25%', label: 'Patient engagement' },
  ],
  heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d279f9?q=80&w=2070&auto=format&fit=crop', 
  overview: 'This project aimed to empower patients by giving them easy, secure access to their health information and a direct line of communication with their care providers.', 
  details: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: '8 Months' }
  ],
  
  sections: [
    {
      title: 'The problem',
      blocks: [
        { type: 'paragraph', content: 'Patients struggled to keep track of their appointments, medication schedules, and test results, often relying on paper records or multiple disconnected patient portals.' }
      ]
    },
    {
      title: 'Project goals',
      blocks: [
        { type: 'list', style: 'ordered', items: [
          'Consolidate medical records into a single view.',
          'Simplify the appointment scheduling process.',
          'Increase medication adherence through reminders.'
        ]}
      ]
    },
    {
      title: 'My design process',
      blocks: [
        { type: 'paragraph', content: 'Given the sensitive nature of health data, the process started with a heavy focus on security and privacy best practices (HIPAA compliance). We co-designed features with a patient advisory group to ensure the app met real-world needs. The UI was designed with accessibility (WCAG 2.1 AA) as a top priority.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Challenges faced',
      blocks: [
        { type: 'paragraph', content: 'Integrating with various electronic health record (EHR) systems, each with its own API and data format, was a major technical and design hurdle. Ensuring the app was simple enough for users who may be elderly or not tech-savvy was also a critical challenge.' }
      ]
    },
    {
      title: 'The solution',
      blocks: [
        { type: 'paragraph', content: 'The app provides a clear timeline of a patient\'s health history, a simple "one-tap" appointment booking system, and intelligent prescription refill reminders. A secure messaging feature allows direct communication with doctors\' offices. All data is encrypted both in transit and at rest.' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1620366299830-18a7d329d7de?q=80&w=1964&auto=format&fit=crop' }
      ]
    },
    {
      title: 'Results & impact',
      blocks: [
        { type: 'metricCards', metrics: [
          { value: '50k+', label: 'Active monthly users' },
          { value: '4.8 ★', label: 'App store rating' },
          { value: '+25%', label: 'Patient engagement' },
        ]}
      ]
    },
    {
      title: 'Key learnings',
      blocks: [
        { type: 'list', style: 'unordered', items: [
          'When designing for healthcare, trust and security are the most important features.', 
          'Involving end-users from the very beginning is crucial for creating a product that truly helps them.'
        ]}
      ]
    }
  ]
};