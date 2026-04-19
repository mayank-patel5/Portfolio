import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gurjarmayank555@gmail.com',
    href: 'mailto:gurjarmayank555@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 97531 07768',
    href: 'tel:9753107768',
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mayank-patel5',
    href: 'https://github.com/mayank-patel5',
    color: 'teal',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://shorturl.at/wbrCR',
    color: 'sky',
  },
];

const colorMap: Record<string, { card: string; icon: string; label: string }> = {
  cyan: {
    card: 'hover:border-cyan-500/30',
    icon: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
    label: 'text-cyan-400',
  },
  blue: {
    card: 'hover:border-blue-500/30',
    icon: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
    label: 'text-blue-400',
  },
  teal: {
    card: 'hover:border-teal-500/30',
    icon: 'bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20',
    label: 'text-teal-400',
  },
  sky: {
    card: 'hover:border-sky-500/30',
    icon: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20',
    label: 'text-sky-400',
  },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's connect</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Have a project idea, internship opportunity, or just want to say hi?
            I'm always open to meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href, color }) => {
            const c = colorMap[color];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-slate-800/40 border border-slate-700/50 ${c.card} rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-slate-800/70`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${c.icon}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${c.label}`}>{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Send size={18} className="text-cyan-400" />
            <h3 className="text-white font-bold text-lg">Send a message</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:gurjarmayank555@gmail.com';
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-medium mb-1.5">Subject</label>
              <input
                type="text"
                placeholder="Internship opportunity / Collaboration idea"
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-medium mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-colors duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm flex items-center gap-2"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
