import { Zap, Video, Lightbulb, ClipboardList, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Task Automation',
    description: 'Automate repetitive, time-consuming tasks using UIPath, RPA workflows, and AI-powered tools. Free up your time to focus on what matters.',
    tags: ['UIPath', 'RPA', 'Workflows'],
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Edit short-form videos and reels optimized for engagement. Clean cuts, captions, and formats tailored for Instagram, YouTube Shorts, and TikTok.',
    tags: ['Reels', 'Short-form', 'Instagram'],
  },
  {
    icon: Lightbulb,
    title: 'Content Ideation & Scripting',
    description: 'Generate fresh content ideas and write compelling scripts aligned with your niche, tone, and audience. Never run out of things to post.',
    tags: ['Scripting', 'Ideas', 'Strategy'],
  },
  {
    icon: ClipboardList,
    title: 'Daily Creator Support',
    description: 'Act as a reliable virtual assistant for creators — handling posting schedules, content planning, captions, and day-to-day digital tasks.',
    tags: ['VA', 'Management', 'Support'],
  },
  {
    icon: Layers,
    title: 'Tech + Content Workflows',
    description: 'Bridge the gap between technology and creativity — set up no-code workflows, AI tools, and content pipelines that scale your creator operation.',
    tags: ['No-code', 'AI Tools', 'Pipelines'],
  },
  {
    icon: TrendingUp,
    title: 'Social Media Growth Support',
    description: 'Research trends, craft engagement-driven captions, and provide strategic input to improve your social media presence and follower growth.',
    tags: ['Growth', 'Captions', 'Trends'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How I can help you</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Whether you're a creator, startup, or individual — here's what I bring to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="group bg-slate-900/60 border border-slate-800 hover:border-cyan-500/25 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900 flex flex-col"
            >
              <div className="w-10 h-10 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Ready to work together?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            I'm actively looking for internships, collaborations, and freelance opportunities. Let's build something great.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
