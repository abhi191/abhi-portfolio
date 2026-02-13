import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { resumeData } from '../data/resume';
import type { ResumeExperience, ResumeSkillCategory, ResumeEducation } from '../data/resume';

// ─── Inline Icon Components ─────────────────────────────────────────────────────

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

const LinkedInSmallIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const BriefcaseSmallIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
);

const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);


// ─── Sub-Components ──────────────────────────────────────────────────────────────

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({
    icon,
    text,
    href,
}) => {
    const content = (
        <span className="flex items-center gap-2.5 text-sm text-brand-dark/70 hover:text-brand-accent transition-colors duration-200">
            <span className="flex-shrink-0 w-4 h-4">{icon}</span>
            <span>{text}</span>
        </span>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }
    return <div>{content}</div>;
};

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-brand-accent/10">
            <span className="w-5 h-5 text-brand-accent block">{icon}</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-brand-dark">{title}</h2>
    </div>
);

const ExperienceCard: React.FC<{ experience: ResumeExperience; index: number }> = ({
    experience,
    index,
}) => (
    <AnimateOnScroll delay={index * 80}>
        <div className="group relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-brand-dark/10 group-last:hidden" />
            {/* Timeline dot */}
            <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-[3px] border-brand-accent bg-brand-background group-hover:bg-brand-accent transition-colors duration-300" />

            <div className="bg-brand-card/50 rounded-2xl p-6 hover:bg-brand-card transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                        <h3 className="text-lg font-bold text-brand-dark">{experience.title}</h3>
                        <p className="text-brand-accent font-semibold text-sm">{experience.company}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                        <p className="text-sm text-brand-dark/60 font-mono">{experience.period}</p>
                        <p className="text-sm text-brand-dark/50">{experience.location}</p>
                    </div>
                </div>
                <ul className="space-y-2 mt-4">
                    {experience.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-brand-dark/75 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 mt-[7px] flex-shrink-0" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </AnimateOnScroll>
);

const SkillCategory: React.FC<{ category: ResumeSkillCategory; index: number }> = ({
    category,
    index,
}) => (
    <AnimateOnScroll delay={index * 100}>
        <div className="mb-10 last:mb-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/50 mb-3">
                {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                    <span
                        key={i}
                        className="inline-block text-sm px-3 py-1.5 rounded-lg bg-brand-card text-brand-dark/80 font-medium hover:bg-brand-accent/10 hover:text-brand-accent transition-all duration-200 cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </AnimateOnScroll>
);

const EducationItem: React.FC<{ education: ResumeEducation; index: number }> = ({
    education,
    index,
}) => (
    <AnimateOnScroll delay={index * 100}>
        <div className="py-4 first:pt-0 last:pb-0">
            <h3 className="font-bold text-brand-dark">{education.degree}</h3>
            <p className="text-sm text-brand-dark/70 mt-0.5">{education.institution}</p>
            <p className="text-xs text-brand-dark/50 font-mono mt-1">{education.period}</p>
        </div>
    </AnimateOnScroll>
);

// ─── Main Component ──────────────────────────────────────────────────────────────

const ResumePage: React.FC = () => {
    const { name, headline, summary, contact, experience, skills, education } = resumeData;

    return (
        <div className="py-24 md:py-32 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
            <div className="max-w-6xl mx-auto">
                {/* ─── Page Header ───────────────────────────────────────────────────── */}
                <AnimateOnScroll>
                    <div className="text-center mb-16 md:mb-20">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark">
                            {name}
                        </h1>
                        <p className="mt-3 text-xl text-brand-accent font-semibold">{headline}</p>
                        <p className="mt-6 text-base md:text-lg text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                            {summary}
                        </p>

                        {/* Contact row */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            <ContactItem
                                icon={<MailIcon className="w-4 h-4" />}
                                text={contact.email}
                                href={`mailto:${contact.email}`}
                            />
                            <ContactItem
                                icon={<PhoneIcon className="w-4 h-4" />}
                                text={contact.phone}
                            />
                            <ContactItem
                                icon={<LinkedInSmallIcon className="w-4 h-4" />}
                                text="LinkedIn"
                                href={`https://${contact.linkedin}`}
                            />
                        </div>

                        {/* Download PDF button */}
                        <div className="mt-8">
                            <a
                                href="/Abhinav.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark/60 hover:text-brand-accent border border-brand-dark/15 hover:border-brand-accent/30 rounded-lg px-5 py-2.5 transition-all duration-200 hover:bg-brand-accent/5"
                            >
                                <DownloadIcon className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* ─── Two-column Layout ─────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
                    {/* Main Column — Experience */}
                    <div>
                        <SectionTitle
                            icon={<BriefcaseSmallIcon className="w-5 h-5" />}
                            title="Work Experience"
                        />
                        <div className="mt-2 space-y-10">
                            {experience.map((exp, index) => (
                                <ExperienceCard key={index} experience={exp} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar — Skills & Education */}
                    <aside className="space-y-20">
                        {/* Skills */}
                        <div>
                            <SectionTitle
                                icon={<SparklesIcon className="w-5 h-5" />}
                                title="Skills"
                            />
                            <div className="space-y-10">
                                {skills.map((cat, index) => (
                                    <SkillCategory key={index} category={cat} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <SectionTitle
                                icon={<AcademicCapIcon className="w-5 h-5" />}
                                title="Education"
                            />
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <EducationItem key={index} education={edu} index={index} />
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
