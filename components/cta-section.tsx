"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#464545] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-8 -left-8 bg-[#e2bfff] p-4 rounded-2xl border-4 border-[#464545] shadow-[6px_6px_0px_0px_#f5f3e7] z-[-1] opacity-40"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Star className="w-6 h-6 text-[#464545]" />
        </motion.div>

        <motion.div
          className="absolute -top-4 -right-12 bg-[#e7eaa1] p-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#f5f3e7] z-[-1] opacity-40"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-4 h-4 bg-[#464545] rounded-full" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 left-8 bg-[#f5f3e7] p-3 rounded-2xl border-4 border-[#464545] shadow-[4px_4px_0px_0px_#f5f3e7] z-[-1] opacity-40"
          animate={{
            y: [0, 8, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 bg-[#e2bfff] rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#f5f3e7] mb-8 leading-tight">
            Sua marca merece <br />
            <span className="text-[#e7eaa1]">se destacar</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#f5f3e7]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Não deixe sua empresa passar despercebida. <br />
            <span className="text-[#e2bfff] font-bold">Vamos criar algo extraordinário juntos.</span>
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center sm:text-left">
              <p className="text-[#f5f3e7]/60 text-sm font-semibold">⚡ Resposta em até 24h</p>
              <p className="text-[#f5f3e7]/60 text-sm font-semibold">🎯 Orçamento personalizado</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#e2bfff] rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#e7eaa1] rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f5f3e7] rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
