import { Github, Linkedin, Mail, Phone, ArrowDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-slate-950 to-slate-950" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wider uppercase">
          <Zap size={12} />
          Open to Internships & Collaborations
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Mayank Patel
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
          I help creators with <span className="text-white">tech & content</span>
        </p>

        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          BTech Computer Science student (RPA specialization) — hackathon winner, automation enthusiast,
          and content creator. Building real-world skills one project at a time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/mayank-patel5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://shorturl.at/wbrCR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gurjarmayank555@gmail.com"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:9753107768"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
}
