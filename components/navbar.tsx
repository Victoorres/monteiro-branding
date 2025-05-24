"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-[#f5f3e7]/95 backdrop-blur-md rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl border-4 border-[#464545] w-full relative">
        {/* Desktop Layout - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-6 justify-start">
            {["Home", "Serviços", "Portfólio", "Sobre", "Contato"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#464545] font-semibold hover:text-[#e2bfff] transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e2bfff] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Center Logo */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-xl font-black text-[#464545]">MONTEIRO BRANDING</h1>
          </motion.div>

          {/* Right CTA Button */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="bg-[#e7eaa1] text-[#464545] font-black px-6 py-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 active:shadow-none active:translate-x-1 active:translate-y-1">
              ORÇAMENTO
            </button>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Mobile Menu Button */}
          <button className="text-[#464545] p-2 z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center Logo */}
          <motion.div
            className="flex-1 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-sm sm:text-lg font-black text-[#464545]">MONTEIRO BRANDING</h1>
          </motion.div>

          {/* Right CTA Button - Cart Icon on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="bg-[#e7eaa1] text-[#464545] font-black p-2 md:p-3 rounded-full border-2 md:border-4 border-[#464545] shadow-[2px_2px_0px_0px_#464545] md:shadow-[4px_4px_0px_0px_#464545] hover:shadow-[1px_1px_0px_0px_#464545] md:hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[1px] md:hover:translate-x-[2px] hover:translate-y-[1px] md:hover:translate-y-[2px] transition-all duration-150 active:shadow-none active:translate-x-1 active:translate-y-1">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu - Full Width Dropdown */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#f5f3e7] rounded-3xl border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545] p-6"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "Serviços", "Portfólio", "Sobre", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#464545] font-bold hover:text-[#e2bfff] transition-colors py-3 px-4 rounded-2xl hover:bg-[#e2bfff]/10 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                className="bg-[#e7eaa1] text-[#464545] font-black px-6 py-4 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 mt-4 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                SOLICITAR ORÇAMENTO
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
