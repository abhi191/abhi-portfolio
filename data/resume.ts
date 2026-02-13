/**
 * ===================================================================================
 * RESUME DATA
 * ===================================================================================
 * All resume content is stored here, separated from presentation.
 */

export interface ResumeExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
}

export interface ResumeEducation {
    degree: string;
    institution: string;
    period: string;
}

export interface ResumeSkillCategory {
    category: string;
    skills: string[];
}

export interface ResumeData {
    name: string;
    headline: string;
    summary: string;
    contact: {
        phone: string;
        email: string;
        linkedin: string;
        website: string;
    };
    experience: ResumeExperience[];
    skills: ResumeSkillCategory[];
    education: ResumeEducation[];
}

export const resumeData: ResumeData = {
    name: 'Abhinav Gupta',
    headline: 'Product Designer',
    summary:
        'A multi-disciplinary designer with 9+ years of domain experience in designing and developing for enterprise and consumer grade applications to create meaningful and easy to use products. Extensive working knowledge of LLMs, agentic AI concepts, vibe-coding and how they shape UX and the design process.',
    contact: {
        phone: '+1 437-435-0345',
        email: 'abhinav191@gmail.com',
        linkedin: 'www.linkedin.com/in/abhinav191',
        website: 'www.itsabhi.com',
    },
    experience: [
        {
            title: 'Sr. Interaction Designer',
            company: 'Google Canada',
            location: 'Toronto, Canada',
            period: 'October 2024 – Dec 2025',
            bullets: [
                'Led the design for a completely new product SaaS Runtime from ground up, 0 → 1, being the sole designer handling multiple integrations with Google Cloud products and stakeholders, leading to successful preview in Google Cloud Next\'25.',
                'Drove the design vision and execution for the App-centric SaaS Runtime platform, contributing to the overall product vision.',
                'Proactively engaged in defining complex requirements and product integrations while utilizing quant data to influence outcomes for the product.',
                'Improved and iterated on the onboarding flow of the product to increase adoption and data model rate by 50%.',
                'Pioneered AI application in design workflows by building interactive prototypes helping save more than 80% time.',
                'Created guides and presented to wider UX design team on application of AI to improve design workflows.',
            ],
        },
        {
            title: 'Senior Product Designer',
            company: 'Cresta AI',
            location: 'Toronto, Canada',
            period: 'April 2024 – October 2024',
            bullets: [
                'Worked and owned the design for the flagship no code Gen AI platform to make automated workflows helping contact center admins to track progress and provide coaching opportunities.',
                'Owned the end-to-end design process across AI Agent surfaces (chat, voice UIs) as well as the builder, training, and tooling ecosystem.',
                'Reduced TTV for the users to train model by 25% by refining the RAG LLM\'s workflow.',
                'Cross functional alignment and partnership to define the future vision for the product.',
            ],
        },
        {
            title: 'Interaction Designer',
            company: 'Google UK',
            location: 'London, UK',
            period: 'May 2022 – April 2024',
            bullets: [
                'Worked on release tools (CI/CD) for Google to help rollout new versions and updates to apps like YouTube, Gmail, Workspace etc.',
                'Improved the UX of the tool and updated it to the latest design standards, resulting in increased EngSat score by 50%.',
                'Introduced and kicked off the accessibility audit of the product and worked to make the product a11y compliant by 100%.',
                'Ongoing technical collaborations with engineers and data scientists to define product workflows.',
            ],
        },
        {
            title: 'Product Designer',
            company: 'VMware',
            location: 'India',
            period: 'Nov 2019 – April 2022',
            bullets: [
                'Designed for the flagship product VMware vRealize Automation — a powerful and easy-to-use Infrastructure Automation Platform.',
                'Worked as the only designer from India for the team driving forward the initiative for providing a consumer grade experience.',
            ],
        },
        {
            title: 'UX Designer',
            company: 'SAP',
            location: 'India',
            period: 'July 2017 – Oct 2019',
            bullets: [
                'Worked as the Lead Designer from Bangalore-India location to create unified experiences for the internal tools development team.',
                'Extensive collaboration with Design teams, Product Managers and Developers from global locations.',
            ],
        },
        {
            title: 'Sr. UI Engineer',
            company: 'Group10',
            location: 'India',
            period: 'Oct 2012 – June 2015',
            bullets: [
                'Worked with front-end technologies like HTML, CSS and JavaScript and frameworks like Drupal with mobile platform development in Android.',
            ],
        },
    ],
    skills: [
        {
            category: 'Design',
            skills: [
                'UX Design',
                'Interaction Design',
                'Generative AI',
                'User Research',
                'Usability Testing',
                'UI Design',
                'Information Architecture',
                'Motion Design',
                'Graphic Design',
                'Data Visualization',
            ],
        },
        {
            category: 'Tools',
            skills: [
                'Figma',
                'Cursor',
                'Windsurf',
                'AI Studio',
                'Sketch',
                'Framer',
                'Claude',
            ],
        },
        {
            category: 'Technology',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Bulma', 'Git'],
        },
    ],
    education: [
        {
            degree: 'Master of Design',
            institution: 'National Institute of Design, India',
            period: '2015 – 2017',
        },
        {
            degree: 'Bachelor of Technology',
            institution: 'Indraprastha University, India',
            period: '2008 – 2012',
        },
    ],
};
