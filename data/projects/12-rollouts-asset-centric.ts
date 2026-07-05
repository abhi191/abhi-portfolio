import type { Project } from '../types';

export const rolloutsAssetCentricProject: Project = {
    id: 12,
    slug: 'rollouts-asset-centric-redesign',
    company: 'Google Cloud',
    companyLogoUrl: "data:image/svg+xml,%3Csvg%20%20%20%20%20%20%20%20viewBox%3D%220%200%20272%2092%22%20%20%20%20%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20%20%20%20%20role%3D%22img%22%20%20%20%20%20%20%20%20aria-label%3D%22Google%22%20%20%20%20%3E%3Cpath%20fill%3D%22%23EA4335%22%20d%3D%22M115.75%2047.18c0%2012.77-9.99%2022.18-22.25%2022.18s-22.25-9.41-22.25-22.18C71.25%2034.32%2081.24%2025%2093.5%2025s22.25%209.32%2022.25%2022.18zm-9.74%200c0-7.98-5.79-13.44-12.51-13.44S80.99%2039.2%2080.99%2047.18c0%207.9%205.79%2013.44%2012.51%2013.44s12.51-5.55%2012.51-13.44z%22%2F%3E%3Cpath%20fill%3D%22%23FBBC05%22%20d%3D%22M163.75%2047.18c0%2012.77-9.99%2022.18-22.25%2022.18s-22.25-9.41-22.25-22.18c0-12.85%209.99-22.18%2022.25-22.18s22.25%209.32%2022.25%2022.18zm-9.74%200c0-7.98-5.79-13.44-12.51-13.44s-12.51%205.46-12.51%2013.44c0%207.9%205.79%2013.44%2012.51%2013.44s12.51-5.55%2012.51-13.44z%22%2F%3E%3Cpath%20fill%3D%22%234285F4%22%20d%3D%22M209.75%2026.34v39.82c0%2016.38-9.66%2023.07-21.08%2023.07-10.75%200-17.22-7.19-19.66-13.07l8.48-3.53c1.51%203.61%205.21%207.87%2011.17%207.87%207.31%200%2011.84-4.51%2011.84-13v-3.19h-.34c-2.18%202.69-6.38%205.04-11.68%205.04-11.09%200-21.25-9.66-21.25-22.09%200-12.52%2010.16-22.26%2021.25-22.26%205.29%200%209.49%202.35%2011.68%204.96h.34v-3.61h9.25zm-8.56%2020.92c0-7.81-5.21-13.52-11.84-13.52-6.72%200-12.35%205.71-12.35%2013.52%200%207.73%205.63%2013.36%2012.35%2013.36%206.63%200%2011.84-5.63%2011.84-13.36z%22%2F%3E%3Cpath%20fill%3D%22%2334A853%22%20d%3D%22M225%203v65h-9.5V3h9.5z%22%2F%3E%3Cpath%20fill%3D%22%23EA4335%22%20d%3D%22M262.02%2054.48l7.56%205.04c-2.44%203.61-8.32%209.83-18.48%209.83-12.6%200-22.01-9.74-22.01-22.18%200-13.19%209.49-22.18%2020.92-22.18%2011.51%200%2017.14%209.16%2018.98%2014.11l1.01%202.52-29.65%2012.28c2.27%204.45%205.8%206.72%2010.75%206.72%204.96%200%208.4-2.44%2010.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95%200-11.84%204.37-11.59%2012.93z%22%2F%3E%3Cpath%20fill%3D%22%234285F4%22%20d%3D%22M35.29%2041.41V32H67c.31%201.64.47%203.58.47%205.68%200%207.06-1.93%2015.79-8.15%2022.01-6.05%206.3-13.78%209.66-24.02%209.66C16.32%2069.35.36%2053.89.36%2034.91.36%2015.93%2016.32.47%2035.3.47c10.5%200%2017.98%204.12%2023.6%209.49l-6.64%206.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86%200-24.7%2011.17-24.7%2025.03%200%2013.86%2010.84%2025.03%2024.7%2025.03%208.99%200%2014.11-3.61%2017.39-6.89%202.66-2.66%204.41-6.46%205.1-11.65l-22.49.01z%22%2F%3E%3C%2Fsvg%3E",
    title: 'Rollouts: Designing an Asset-Centric Debugging Experience',
    description: 'Redesigning a noisy rollout timeline into an asset-centric observability experience that reduced support tickets and improved user confidence.',
    metrics: [
        { value: '70%', label: 'Positive feedback (Hats survey)' },
        { value: '↓ Support', label: 'Reduction in timeline-related tickets' },
        { value: '3 Months', label: 'From research to GA' },
    ],
    showMetricsOnCard: false,
    // TODO: add card image asset to public/project-assets/rollouts/ and restore imageUrl
    imagePosition: 'right',

    heroImage: '/project-assets/rollouts/hero-image.jpg',
    overview: 'Rollouts is a production deployment service used to safely push changes across environments using waves, strategies, and safety checks. Users repeatedly struggled to understand rollout progress, failures, and delays due to noisy and complex timelines. I led the redesign toward an asset-centric experience that made debugging intuitive, scalable, and actionable.',
    details: [
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Timeline', value: '3 Months (GA Launch)' },
        { label: 'Team', value: '1 PM · 1 SRM · 4 Engineers' },
        { label: 'Platform', value: 'Web (Google Cloud Console)' },
    ],
    gradientBackgroundColor: 'blue',

    sections: [
        {
            title: 'Context',
            blocks: [
                { type: 'paragraph', content: 'Rollouts is a service for making changes to production based on a strategy. It manages staged deployments across environments like Dev, Staging, and Production.' },
                { type: 'paragraph', content: 'Deployments happen in waves, each with conditions, cooldown periods, and validation checks. However, when something went wrong, users struggled to answer:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Why was my rollout slow?',
                        'What is taking so long?',
                        'Why did my rollout fail?',
                    ]
                },
                { type: 'paragraph', content: 'The data was technically correct — but overwhelmingly noisy.' },
            ]
        },
        {
            title: 'The Problem',
            blocks: [
                { type: 'paragraph', content: 'Users repeatedly said:' },
                {
                    type: 'quote',
                    text: "I don't understand what is happening.",
                },
                { type: 'paragraph', content: 'Specifically, the timeline:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Lacked clear information hierarchy',
                        'Was not scalable for large datasets',
                        'Created information overload',
                        'Made it difficult to focus on a single asset',
                        'Had no effective filtering',
                        'Provided limited onboarding guidance',
                        'Did not clearly correlate failures with rollout state',
                    ]
                },
                { type: 'paragraph', content: 'The system was functional — but ==red:not explainable==.' },
            ]
        },
        {
            title: 'Research',
            blocks: [
                { type: 'heading', level: 3, content: 'Methods' },
                {
                    type: 'list', style: 'unordered', items: [
                        '7 semi-structured user interviews',
                        '3 debugging scenarios walkthroughs',
                        'Focused on timeline usage in real environments',
                    ]
                },
                { type: 'heading', level: 3, content: 'Critical User Journey' },
                {
                    type: 'list', style: 'ordered', items: [
                        'Understand rollout',
                        'Identify problem',
                        'Trace problem to root cause',
                    ]
                },
            ]
        },
        {
            title: 'Key Insights',
            blocks: [
                {
                    type: 'list', style: 'unordered', items: [
                        'Information hierarchy was unclear',
                        'Too many visual signals competing for attention',
                        'Difficult to correlate assets with rollout events',
                        'No easy way to filter relevant information',
                        'Timeline structure was not scalable',
                        'First-time users struggled significantly',
                    ]
                },
                { type: 'paragraph', content: 'Users wanted ==green:clarity== — not more data.' },
            ]
        },
        {
            title: 'Design Workshop',
            blocks: [
                { type: 'paragraph', content: 'To explore solutions, I ran a cross-functional workshop.' },
                { type: 'heading', level: 4, content: 'Participants' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Timeline Team (PM, TL, Dev)',
                        'Asset Team (PM, TL, Dev)',
                    ]
                },
                { type: 'heading', level: 4, content: 'Structure' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Research readout',
                        'HMW statements',
                        'Crazy 8 ideation',
                        'Voting & prioritization',
                    ]
                },
                { type: 'paragraph', content: 'We explored multiple structural changes:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Grouping events by start time',
                        'Grouping events by end time',
                        'Adding filtering',
                        'Consolidating successful steps',
                    ]
                },
                { type: 'paragraph', content: 'Each iteration solved part of the problem — but created new issues.' },
                { type: 'paragraph', content: 'We were going in circles.' },
            ]
        },
        {
            title: 'Reframing the Problem',
            blocks: [
                { type: 'paragraph', content: 'Instead of optimizing the timeline…' },
                { type: 'paragraph', content: '==green:What if we focused on assets?==' },
                { type: 'paragraph', content: 'Assets:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Have multiple statuses',
                        'Influence rollout state',
                        'Have user actions attached',
                        'Have their own lifecycle',
                        'Can scale to 30–40 per server',
                    ]
                },
                { type: 'paragraph', content: 'This reframing shifted the solution direction entirely.' },
            ]
        },
        {
            title: 'Solution: Asset-Centric View',
            blocks: [
                { type: 'heading', level: 3, content: 'Assets as Chips' },
                { type: 'paragraph', content: 'We introduced asset chips that:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Display multiple statuses',
                        'Show at-a-glance state',
                        'Use icons and colors for signaling',
                        'Are expandable for more details',
                        'Scale across many asset types',
                    ]
                },
                { type: 'paragraph', content: 'This ==green:dramatically reduced UI noise==.' },
            ]
        },
        {
            title: 'Asset-Centric Timeline',
            blocks: [
                { type: 'paragraph', content: 'Instead of a purely chronological event stream:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Each asset had its own contextual timeline',
                        'Users could expand an asset to debug',
                        'Visual separation of waves improved clarity',
                        'Rollouts overview had clear hierarchy',
                    ]
                },
                { type: 'paragraph', content: 'We ensured scalability and usability before finalizing the approach.' },
            ]
        },
        {
            title: 'Validation',
            blocks: [
                { type: 'paragraph', content: 'To validate feasibility and clarity:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Used Excel for rapid iteration on large datasets',
                        'Modeled asset vs timeline comparison',
                        'Collaborated closely with engineers',
                        'Tested multiple edge cases',
                    ]
                },
                { type: 'paragraph', content: 'Then conducted quick user testing:' },
                {
                    type: 'list', style: 'unordered', items: [
                        '6 users (SWEs & SREs)',
                        'Participants could identify issues quickly',
                        'Timeline structure improved orientation',
                        'Feedback highlighted need for better wording',
                    ]
                },
            ]
        },
        {
            title: 'Content Improvements',
            blocks: [
                {
                    type: 'list', style: 'unordered', items: [
                        'Collaborated with technical writer',
                        'Improved error messages',
                        'Added tooltips and contextual help',
                        'Clarified rollout state explanations',
                    ]
                },
                { type: 'paragraph', content: 'Explainability became a ==green:first-class design principle==.' },
            ]
        },
        {
            title: 'Final Design',
            blocks: [
                { type: 'paragraph', content: 'The final experience delivered:' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Asset-centric expandable view',
                        'Clear separation of waves',
                        'Self-explanatory asset chips',
                        'Improved rollout overview hierarchy',
                        'Contextual help and improved copy',
                    ]
                },
                { type: 'paragraph', content: 'Before → After comparison clearly showed reduced clutter and improved signal clarity.' },
            ]
        },
        {
            title: 'Impact',
            blocks: [
                {
                    type: 'metricCards', metrics: [
                        { value: '70%', label: 'Positive Hats survey response', color: 'green' },
                        { value: '↓ Support tickets', label: 'Timeline-related queries reduced', color: 'blue' },
                        { value: 'Improved clarity', label: 'Faster root cause identification', color: 'yellow' },
                    ]
                },
                { type: 'paragraph', content: 'Since launch:' },
                {
                    type: 'list', style: 'unordered', items: [
                        '70% positive response rate via Hats survey',
                        'Reduced support tickets related to timelines',
                        'Positive feedback from engineering leads',
                        'CSAT launched to measure long-term health',
                    ]
                },
            ]
        },
        {
            title: 'Challenges & Learnings',
            blocks: [
                { type: 'heading', level: 3, content: 'Challenges' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Navigating complex technical constraints',
                        'Aligning PM and engineering around user needs',
                        'Working within scalability limitations',
                        'Designing for large datasets',
                    ]
                },
                { type: 'heading', level: 3, content: 'Learnings' },
                {
                    type: 'list', style: 'unordered', items: [
                        'Start from user journey when facing complexity',
                        'Involve cross-functional partners early',
                        'Use low-fidelity tools (Excel) for fast iteration',
                        'Avoid over-investing in UI mocks too early',
                        'Drive convergence using user-centered decision framing',
                    ]
                },
            ]
        },
        {
            title: 'Reflection',
            blocks: [
                { type: 'paragraph', content: 'This project reinforced a core principle:' },
                { type: 'paragraph', content: 'UX in complex systems is not about adding visibility — it is about ==green:structuring information so that meaning emerges clearly==.' },
                { type: 'paragraph', content: 'By shifting from a timeline-centric model to an asset-centric model, we transformed Rollouts from a log viewer into a debugging tool.' },
            ]
        },
    ]
};
