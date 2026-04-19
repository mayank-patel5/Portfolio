import { Trophy, BookOpen, Rocket, Users } from 'lucide-react';

const highlights = [
  { icon: Trophy, label: 'Hackathon Winner', desc: 'Built an AI-based solution recognized for innovation' },
  { icon: BookOpen, label: 'BTech CS Student', desc: 'RPA specialization — combining tech & automation' },
  { icon: Rocket, label: 'Fast Learner', desc: 'Constantly picking up new tools, frameworks & skills' },
  { icon: Users, label: 'Creator Collaborator', desc: 'Helping creators grow through tech & content' },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              A 20-year-old builder with a passion for tech & content
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm Mayank Patel — a BTech Computer Science student specializing in Robotic Process Automation (RPA).
                I'm deeply passionate about the intersection of technology and creativity, whether that's automating
                repetitive workflows or crafting compelling content for digital audiences.
              </p>
              <p>
                As a hackathon winner, I've proven I can turn ideas into real, working solutions under pressure.
                I thrive in fast-paced environments, pick up new skills quickly, and always focus on delivering value
                to the people I work with.
              </p>
              <p>
                I'm actively looking for internships, collaborations, and opportunities with creators and startups
                where I can contribute and grow at the same time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['RPA Developer', 'Content Creator', 'AI Enthusiast', 'Problem Solver', 'Hackathon Winner'].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-slate-800 group"
              >
                <div className="w-10 h-10 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
