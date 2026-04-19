import { BookOpen, Bot, Cpu, Trophy, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: BookOpen,
    title: 'Library Management System',
    category: 'Python Project',
    description:
      'A fully functional library management system built with Python using OOP principles. Handles book cataloging, user management, and transaction tracking.',
    tags: ['Python', 'OOP', 'CLI', 'Data Management'],
    color: 'cyan',
    badge: 'Personal Project',
  },
  {
    icon: Bot,
    title: 'AI Symptom Chatbot',
    category: 'Concept Project',
    description:
      'Designed and architected an AI-powered chatbot for medical symptom analysis. Focused on real-world problem-solving using AI and natural language processing concepts.',
    tags: ['AI', 'Chatbot', 'Healthcare', 'NLP'],
    color: 'blue',
    badge: 'Concept / Design',
  },
  {
    icon: Cpu,
    title: 'UIPath Automation Workflows',
    category: 'RPA Project',
    description:
      'Built enterprise-grade automation workflows including queue handling, transaction processing, asset management, and deployment via UIPath Orchestrator.',
    tags: ['UIPath', 'RPA', 'Orchestrator', 'Automation'],
    color: 'teal',
    badge: 'Automation',
  },
  {
    icon: Trophy,
    title: 'Hackathon AI Solution',
    category: 'Hackathon Winner',
    description:
      'Developed an AI-based solution at a competitive hackathon, earning recognition for innovation, real-world applicability, and technical execution.',
    tags: ['AI', 'Innovation', 'Hackathon', 'Problem Solving'],
    color: 'amber',
    badge: 'Winner',
  },
];

const colorMap: Record<string, { icon: string; border: string; badgeBg: string; tag: string }> = {
  cyan: {
    icon: 'bg-cyan-500/10 text-cyan-400',
    border: 'hover:border-cyan-500/30',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    tag: 'bg-cyan-500/5 text-cyan-500/80 border-cyan-500/10',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-400',
    border: 'hover:border-blue-500/30',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    tag: 'bg-blue-500/5 text-blue-500/80 border-blue-500/10',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-400',
    border: 'hover:border-teal-500/30',
    badgeBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    tag: 'bg-teal-500/5 text-teal-500/80 border-teal-500/10',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-400',
    border: 'hover:border-amber-500/30',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    tag: 'bg-amber-500/5 text-amber-500/80 border-amber-500/10',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Things I've built</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A collection of projects demonstrating my skills across automation, AI, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ icon: Icon, title, category, description, tags, color, badge }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`group bg-slate-800/40 border border-slate-700/50 ${c.border} rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 flex flex-col`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badgeBg}`}>
                    {badge}
                  </span>
                </div>

                <p className="text-slate-500 text-xs font-medium mb-1">{category}</p>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-md border font-medium ${c.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mayank-patel5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm"
          >
            <ExternalLink size={15} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
