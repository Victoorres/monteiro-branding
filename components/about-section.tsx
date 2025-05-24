'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Header Badge */}
            <motion.div
              className="inline-block bg-[#464545] text-[#f5f3e7] px-6 py-2 rounded-full font-black text-sm mb-8 border-2 border-[#464545]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              viewport={{ once: true }}
            >
              FUNDADORA
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#f5f3e7] mb-8 leading-tight">
              Descobrindo <br />
              <span className="text-[#e7eaa1] italic">a conexão</span>
            </h2>

            {/* Image Container with Organic Shape */}
            <div className="relative mb-8">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                {/* Organic Shape Background */}
                <div
                  className="absolute inset-0 bg-[#f5f3e7] border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545]"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  }}
                />

                {/* Decorative Circle */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e2bfff] rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545]" />

                {/* Placeholder for Hanna's Photo */}
                <div
                  className="absolute inset-2 bg-gradient-to-br from-[#e7eaa1] to-[#e2bfff] flex items-center justify-center text-6xl font-black text-[#464545]"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  }}
                >
                  <Image
                    src="/hanna.jpg"
                    alt="UP Club Logo"
                    fill
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover"
                    priority
                    style={{
                      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                      border: '4px solid #464545',
                    }}
                  />
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-[#f5f3e7] mb-6">
              entre criatividade <br />e estratégia com <span className="text-[#e2bfff]">Hanna</span>
            </h3>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#f5f3e7] p-8 rounded-3xl border-4 border-[#464545] shadow-[8px_8px_0px_0px_#f5f3e7]">
              <h4 className="text-2xl md:text-3xl font-black text-[#464545] mb-6">Hanna Monteiro</h4>

              <p className="text-lg text-[#464545] leading-relaxed mb-6">
                Designer com formação acadêmica e se especializando em Gestão de Marcas, Estratégia e Branding pela PUC
                Goiás.
              </p>

              <p className="text-lg text-[#464545] leading-relaxed mb-6">
                Apaixonada pela criação e desenvolvimento de marcas que geram conexão, propósito e valor.
              </p>

              <p className="text-lg text-[#464545] leading-relaxed">
                Atuo na construção de identidades visuais estratégicas, alinhando estética, posicionamento e resultados
                de negócio.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#e2bfff] p-6 rounded-2xl border-4 border-[#464545] shadow-[4px_4px_0px_0px_#f5f3e7] text-center">
                <div className="text-3xl font-black text-[#464545]">100+</div>
                <p className="text-sm text-[#464545] font-semibold">Projetos</p>
              </div>
              <div className="bg-[#e7eaa1] p-6 rounded-2xl border-4 border-[#464545] shadow-[4px_4px_0px_0px_#f5f3e7] text-center">
                <div className="text-3xl font-black text-[#464545]">5+</div>
                <p className="text-sm text-[#464545] font-semibold">Anos</p>
              </div>
            </div>

            <button className="bg-[#f5f3e7] text-[#464545] font-black px-8 py-4 text-lg rounded-full border-4 border-[#464545] shadow-[6px_6px_0px_0px_#f5f3e7] hover:shadow-[3px_3px_0px_0px_#f5f3e7] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150">
              Conhecer Mais
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
