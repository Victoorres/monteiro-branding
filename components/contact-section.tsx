'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#f5f3e7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#464545] mb-6">
            Tem uma ideia? <br /> Então vamos <span className="text-[#e2bfff]">conversar!</span>
          </h2>
          <p className="text-lg md:text-xl text-[#464545]/80 max-w-2xl mx-auto">
            Nos conte o que tem em mente e vamos fazer acontecer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#e7eaa1] p-4 rounded-2xl border-2 border-[#464545] shadow-[4px_4px_0px_0px_#464545]">
                <Mail className="w-6 h-6 text-[#464545]" />
              </div>
              <div>
                <h3 className="font-black text-[#464545]">Email</h3>
                <p className="text-[#464545]/80">contato@monteirobranding.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#e2bfff] p-4 rounded-2xl border-2 border-[#464545] shadow-[4px_4px_0px_0px_#464545]">
                <Phone className="w-6 h-6 text-[#464545]" />
              </div>
              <div>
                <h3 className="font-black text-[#464545]">Telefone</h3>
                <p className="text-[#464545]/80">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#e7eaa1] p-4 rounded-2xl border-2 border-[#464545] shadow-[4px_4px_0px_0px_#464545]">
                <MapPin className="w-6 h-6 text-[#464545]" />
              </div>
              <div>
                <h3 className="font-black text-[#464545]">Localização</h3>
                <p className="text-[#464545]/80">São Paulo, SP</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-4 rounded-2xl border-4 border-[#464545] font-semibold text-[#464545] placeholder-[#464545]/60 focus:outline-none focus:ring-4 focus:ring-[#e2bfff]/50"
            />
            <input
              type="email"
              placeholder="Seu email"
              className="w-full p-4 rounded-2xl border-4 border-[#464545] font-semibold text-[#464545] placeholder-[#464545]/60 focus:outline-none focus:ring-4 focus:ring-[#e2bfff]/50"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="w-full p-4 rounded-2xl border-4 border-[#464545] font-semibold text-[#464545] placeholder-[#464545]/60 focus:outline-none focus:ring-4 focus:ring-[#e2bfff]/50 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#f5f3e7] text-[#464545] font-black px-8 py-4 text-lg rounded-full border-4 border-[#464545] shadow-[6px_6px_0px_0px_#464545] hover:shadow-[3px_3px_0px_0px_#464545] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
