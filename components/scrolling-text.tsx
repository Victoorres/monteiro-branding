"use client"

import { motion } from "framer-motion"

export default function ScrollingText() {
  const text = "BRANDING • DESIGN • ESTRATÉGIA • IDENTIDADE VISUAL • "
  const repeatedText = text.repeat(20) // Repeat many times for seamless loop

  return (
    <motion.div
      className="bg-[#f5f3e7] text-[#464545] py-3 md:py-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <span className="text-2xl md:text-4xl font-black">{repeatedText}</span>
      </motion.div>
    </motion.div>
  )
}
