'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    { name: 'Estratégia de Marca', color: '#e2bfff' },
    { name: 'Identidade Visual', color: '#e7eaa1' },
    { name: 'Branding Completo', color: '#e2bfff' },
    { name: 'Rebranding', color: '#e7eaa1' },
    { name: 'Design Digital', color: '#e2bfff' },
    { name: 'Consultoria', color: '#e7eaa1' },
    { name: 'Manual da Marca', color: '#e2bfff' },
    { name: 'Aplicações Gráficas', color: '#e7eaa1' },
    { name: 'Naming', color: '#e2bfff' },
    { name: 'Posicionamento', color: '#e7eaa1' },
  ];

  return (
    <section id="serviços" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#e2bfff] rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#e7eaa1] rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#e2bfff] rounded-full blur-xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f5f3e7] mb-8 leading-tight">
            Nossos <span className="text-[#e2bfff]">serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-[#f5f3e7]/80 max-w-2xl mx-auto">
            Use nossos serviços especializados para impactar seu mercado.
          </p>
        </motion.div>

        {/* Services Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 rounded-full font-black text-[#464545] border-4 border-[#464545] shadow-[4px_4px_0px_0px_#f5f3e7] hover:shadow-[2px_2px_0px_0px_#f5f3e7] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer text-sm md:text-base"
              style={{ backgroundColor: service.color }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {service.name}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#f5f3e7] text-[#464545] font-black px-10 py-5 text-xl rounded-full border-4 border-[#464545] shadow-[8px_8px_0px_0px_#f5f3e7] hover:shadow-[4px_4px_0px_0px_#f5f3e7] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-none active:translate-x-1 active:translate-y-1">
            Vamos conversar sobre seu projeto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
