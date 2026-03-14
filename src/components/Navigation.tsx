import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-slate-950/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white tracking-tighter"
        >
          RS<span className="text-blue-500">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-slate-800" />
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/rahul-singh-a7793916b/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rs58598@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-slate-950 border-b border-white/5"
      >
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-medium text-slate-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
