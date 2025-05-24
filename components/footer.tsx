'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  FolderOpen,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MousePointer,
  Settings,
  User,
} from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/monteirobranding',
      hoverColor:
        'border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#f5f3e7] md:shadow-[4px_4px_0px_0px_#f5f3e7] hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/company/monteirobranding',
      hoverColor:
        'border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#f5f3e7] md:shadow-[4px_4px_0px_0px_#f5f3e7] hover:bg-[#0077B5]',
    },
    {
      name: 'Behance',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-5 h-5 bi bi-behance"
          viewBox="0 0 16 16"
        >
          <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
        </svg>
      ),
      url: 'https://behance.net/monteirobranding',
      hoverColor:
        'border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#f5f3e7] md:shadow-[4px_4px_0px_0px_#f5f3e7] hover:bg-[#1769FF]',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    { name: 'home', label: 'home', id: 'home', icon: <Home className="w-8 h-8" /> },
    { name: 'serviços', label: 'serviços', id: 'serviços', icon: <Briefcase className="w-8 h-8" /> },
    { name: 'portfólio', label: 'portfólio', id: 'portfólio', icon: <FolderOpen className="w-8 h-8" /> },
    { name: 'métodos', label: 'métodos', id: 'métodos', icon: <Settings className="w-8 h-8" /> },
    { name: 'estúdio', label: 'sobre', id: 'sobre', icon: <User className="w-8 h-8" /> },
    { name: 'contato', label: 'contato', id: 'contato', icon: <MessageCircle className="w-8 h-8" /> },
  ];

  return (
    <footer className="bg-[#464545] text-[#f5f3e7] relative overflow-hidden">
      {/* Console Navigation */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#f5f3e7] mb-4">
              Volte ao começo. <br />
              <span className="text-[#e2bfff]">Revisite</span> quando quiser
            </h2>
            <p className="text-lg text-[#f5f3e7]/70 font-semibold">Escolha seu destino</p>
          </motion.div>

          {/* Arcade Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.name}
                className={`group cursor-pointer transition-all duration-150 ${
                  hoveredSection === section.name ? 'transform translate-x-1 translate-y-1' : ''
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredSection(section.name)}
                onMouseLeave={() => setHoveredSection(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Arcade Button */}
                <div
                  className={`relative p-8 md:p-10 rounded-3xl border-4 border-[#464545] transition-all duration-150 ${
                    hoveredSection === section.name
                      ? 'bg-gradient-to-br from-[#e2bfff] to-[#e7eaa1] shadow-[4px_4px_0px_0px_#464545]'
                      : 'bg-[#f5f3e7] shadow-[8px_8px_0px_0px_#464545]'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-4 rounded-2xl border-4 border-[#464545] transition-all duration-150 ${
                        hoveredSection === section.name
                          ? 'bg-[#f5f3e7] text-[#464545] shadow-[2px_2px_0px_0px_#464545]'
                          : 'bg-[#e2bfff] text-[#464545] shadow-[4px_4px_0px_0px_#464545]'
                      }`}
                    >
                      {section.icon}
                    </div>
                  </div>

                  {/* Label */}
                  <h3
                    className={`text-xl md:text-2xl font-black text-center uppercase tracking-wider transition-colors duration-150 ${
                      hoveredSection === section.name ? 'text-[#464545]' : 'text-[#464545]'
                    }`}
                  >
                    {section.label}
                  </h3>

                  {/* Hover Indicator */}
                  {hoveredSection === section.name && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-[#e7eaa1] text-[#464545] p-2 rounded-full border-4 border-[#464545] shadow-[3px_3px_0px_0px_#464545]"
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0, rotate: 45 }}
                      transition={{ duration: 0.2, type: 'spring' }}
                    >
                      <MousePointer className="w-4 h-4" />
                    </motion.div>
                  )}

                  {/* Glitch Effect */}
                  {hoveredSection === section.name && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#e2bfff]/20 to-[#e7eaa1]/20 rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.3, repeat: 2 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
              <img
                src="/mbrand-logo.svg?height=80&width=80"
                alt="Monteiro Branding Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Write Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-sm font-black text-[#f5f3e7] uppercase tracking-wider mb-4">Mande um oizinho</h3>
            <a
              href="mailto:hello@monteirobranding.me"
              className="text-[#f5f3e7]/80 hover:text-[#e7eaa1] transition-colors"
            >
              hello@monteirobranding.me
            </a>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-6 justify-self-center"
          >
            <h3 className="text-sm font-black text-[#f5f3e7] uppercase tracking-wider mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-[#f5f3e7]/10 rounded-full flex items-center justify-center text-[#f5f3e7] transition-all duration-300 ${social.hoverColor} hover:text-white hover:scale-110`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Come See Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-sm font-black text-[#f5f3e7] uppercase tracking-wider mb-4">Venha nos ver</h3>
            <div className="space-y-4 text-[#f5f3e7]/80 text-sm">
              <div>
                <p>Anápolis, GO</p>
                <p>Brasil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="py-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#f5f3e7]/60 text-sm">
            © {new Date().getFullYear()} Monteiro Branding. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
