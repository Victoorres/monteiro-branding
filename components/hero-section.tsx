"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Plus, Star, Sparkles, Zap, Smile } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center 
     -mt-[6vh] sm:mt-[8vh] md:mt-[12vh] lg:mt-[12vh] px-4">
      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Floating Elements - Melhorados */}
        <motion.div
          className="absolute -top-14 sm:-top-8 md:-top-16 sm:-left-4 md:-left-8 bg-[#e2bfff] text-[#464545] px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-2xl font-black text-xs sm:text-sm md:text-base border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#e2bfff] md:shadow-[4px_4px_0px_0px_#e2bfff] z-[-1] opacity-40"
          initial={{ scale: 0, rotate: -45 }}
          animate={{
            scale: 1,
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            scale: { delay: 1, duration: 0.6, type: "spring" },
            rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Branding
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-2 sm:-top-4 md:-top-16 right-6 sm:right-8 md:right-2 bg-[#e7eaa1] p-2 sm:p-3 md:p-4 rounded-2xl border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#e7eaa1] md:shadow-[4px_4px_0px_0px_#e7eaa1] z-[-1] opacity-40"
          initial={{ scale: 0, y: -50 }}
          animate={{
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            scale: { delay: 1.2, duration: 0.6, type: "spring" },
            y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-[#464545]" />
        </motion.div>

        <motion.div
          className="absolute top-[45vh] sm:top-16 md:top-28 right-24 sm:-right-6 md:-right-12 bg-[#e7eaa1] text-[#464545] px-3 sm:px-4 md:px-5 py-2 md:py-2 rounded-2xl text-xs sm:text-sm md:text-base font-black border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#e7eaa1] md:shadow-[4px_4px_0px_0px_#e7eaa1] z-[-1] opacity-40"
          initial={{ scale: 0, x: 50 }}
          animate={{
            scale: 1,
            x: [0, 10, -10, 0],
            y: [0, -8, 8, 0],
          }}
          transition={{
            scale: { delay: 1.4, duration: 0.6, type: "spring" },
            x: { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            Criativo
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-24 left-12 sm:bottom-8 md:bottom-16 sm:-left-8 md:-left-16 bg-[#e2bfff] p-2 sm:p-3 md:p-4 rounded-2xl border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#e2bfff] md:shadow-[4px_4px_0px_0px_#e2bfff] z-[-1] opacity-40"
          initial={{ scale: 0, rotate: 45 }}
          animate={{
            scale: 1,
            rotate: [0, 15, -15, 0],
            y: [0, -12, 0],
          }}
          transition={{
            scale: { delay: 1.6, duration: 0.6, type: "spring" },
            rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            y: { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-[#464545]" />
        </motion.div>

        <motion.div
          className="absolute -bottom-16 sm:bottom-4 md:bottom-8 right-2 sm:right-4 md:right-8 bg-[#e2bfff] text-[#464545] px-2 sm:px-4 md:px-4 py-2 md:py-4 rounded-full font-black text-xs sm:text-sm md:text-base border-2 md:border-3 border-[#464545] shadow-[3px_3px_0px_0px_#e2bfff] md:shadow-[4px_4px_0px_0px_#e2bfff] z-[-1] opacity-40"
          initial={{ scale: 0, y: 50 }}
          animate={{
            scale: 1,
            y: [0, -5, 5, 0],
            x: [0, -8, 8, 0],
          }}
          transition={{
            scale: { delay: 1.8, duration: 0.6, type: "spring" },
            y: { duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <Smile className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </motion.div>

        {/* Main Typography */}
        <div className="text-center max-w-6xl mx-auto px-4">
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-4 md:mb-6">
              <motion.span
                className="text-[#f5f3e7] block"
                whileHover={{ scale: 1.02, color: "#e7eaa1" }}
                transition={{ duration: 0.3 }}
              >
                Somos um estúdio
              </motion.span>
            </div>
            <div className="mb-4 md:mb-6">
              <motion.span
                className="text-[#e2bfff] block"
                whileHover={{ scale: 1.02, color: "#e7eaa1" }}
                transition={{ duration: 0.3 }}
              >
                especialista
              </motion.span>
              <motion.span
                className="text-[#f5f3e7] block"
                whileHover={{ scale: 1.02, color: "#e2bfff" }}
                transition={{ duration: 0.3 }}
              >
                em
              </motion.span>
            </div>
            <div>
              <motion.span
                className="text-[#e7eaa1] block"
                whileHover={{ scale: 1.02, color: "#e2bfff" }}
                transition={{ duration: 0.3 }}
              >
                Identidade Visual
              </motion.span>
              <motion.span
                className="text-[#f5f3e7] block"
                whileHover={{ scale: 1.02, color: "#e7eaa1" }}
                transition={{ duration: 0.3 }}
              >
                & Branding
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[#f5f3e7]/80 mt-8 md:mt-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            para negócios com <span className="text-[#e2bfff] font-bold">autenticidade</span>
          </motion.p>
        </div>

        {/* Additional Floating Micro Elements */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`micro-${index}`}
          className="absolute w-2 h-2 bg-[#f5f3e7] rounded-full z-[-1] lg:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-[#e7eaa1] to-[#e2bfff] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-[#e2bfff] to-[#e7eaa1] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-[#e2bfff] to-[#e7eaa1] rounded-full blur-3xl" />
      </motion.div>
    </section>
  )
}
