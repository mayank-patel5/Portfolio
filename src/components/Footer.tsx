import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <Code2 size={20} className="text-cyan-400" />
          <span>Mayank<span className="text-cyan-400">.</span></span>
        </div>

        <p className="text-slate-600 text-sm text-center">
          Designed & built by Mayank Patel — Open to internships & collaborations
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mayank-patel5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://shorturl.at/wbrCR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:gurjarmayank555@gmail.com"
            className="w-8 h-8 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
