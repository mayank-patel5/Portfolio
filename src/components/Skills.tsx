import { Code2, Bot, Brain, Video, Megaphone, TrendingUp, Zap, Lightbulb } from 'lucide-react';

const skillGroups = [
  {
    category: 'Programming',
    color: 'cyan',
    skills: [
      { icon: Code2, name: 'Python', level: 'Basic', detail: 'OOP, scripting, automation' },
      { icon: Code2, name: 'Java', level: 'Intermediate', detail: 'OOP concepts, data structures' },
    ],
  },
  {
    category: 'Automation & AI',
    color: 'blue',
    skills: [
      { icon: Bot, name: 'UIPath', level: 'Intermediate', detail: 'RPA, Orchestrator, workflows' },
      { icon: Brain, name: 'AI Tools', level: 'Intermediate', detail: 'No-code AI, prompt engineering' },
      { icon: Zap, name: 'No-Code Dev', level: 'Intermediate', detail: 'Workflow builders, integrations' },
    ],
  },
  {
    category: 'Content & Media',
    color: 'teal',
    skills: [
      { icon: Video, name: 'Video Editing', level: 'Intermediate', detail: 'Reels, short-form content' },
      { icon: Megaphone, name: 'Content Creation', level: 'Intermediate', detail: 'Ideas, scripting, posts' },
      { icon: TrendingUp, name: 'Social Media', level: 'Basic', detail: 'Trends, captions, engagement' },
    ],
  },
  {
    category: 'Soft Skills',
    color: 'emerald',
    skills: [
      { icon: Lightbulb, name: 'Problem Solving', level: 'Strong', detail: 'Analytical & creative thinking' },
      { icon: Zap, name: 'Fast Learning', level: 'Strong', detail: 'Rapid skill acquisition' },
    ],
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string; glow: string }> = {
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'bg-cyan-500/10 text-cyan-400',
    border: 'hover:border-cyan-500/30',
    glow: 'group-hover:bg-cyan-500/20',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'bg-blue-500/10 text-blue-400',
    border: 'hover:border-blue-500/30',
    glow: 'group-hover:bg-blue-500/20',
  },
  teal: {
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    icon: 'bg-teal-500/10 text-teal-400',
    border: 'hover:border-teal-500/30',
    glow: 'group-hover:bg-teal-500/20',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'bg-emerald-500/10 text-emerald-400',
    border: 'hover:border-emerald-500/30',
    glow: 'group-hover:bg-emerald-500/20',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I bring to the table</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A versatile skill set spanning automation, programming, AI tools, and digital content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map(({ category, color, skills }) => {
            const c = colorMap[color];
            return (
              <div key={category} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>
                    {category}
                  </span>
                </div>
                <div className="space-y-3">
                  {skills.map(({ icon: Icon, name, level, detail }) => (
                    <div
                      key={name}
                      className={`group flex items-center gap-4 bg-slate-800/50 border border-slate-700/40 ${c.border} rounded-xl p-4 transition-all duration-300`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${c.icon} ${c.glow}`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white font-medium text-sm">{name}</span>
                          <span className="text-slate-600 text-xs flex-shrink-0">{level}</span>
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
