"use client"

import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Transformou completamente nossa marca!",
      author: "Maria Silva",
      avatar: "/placeholder.svg?height=60&width=60&text=MS",
      position: "left",
    },
    {
      text: "Processo incrível...",
      author: "João Santos",
      avatar: "/placeholder.svg?height=60&width=60&text=JS",
      position: "right",
    },
    {
      text: "Superou expectativas!",
      author: "Ana Costa",
      avatar: "/placeholder.svg?height=60&width=60&text=AC",
      position: "center",
    },
    {
      text: "Recomendo demais!",
      author: "Pedro Lima",
      avatar: "/placeholder.svg?height=60&width=60&text=PL",
      position: "left",
    },
    {
      text: "Profissionalismo total.",
      author: "Carla Mendes",
      avatar: "/placeholder.svg?height=60&width=60&text=CM",
      position: "right",
    },
    {
      text: "Resultado fantástico!",
      author: "Lucas Oliveira",
      avatar: "/placeholder.svg?height=60&width=60&text=LO",
      position: "center",
    },
    {
      text: "Equipe muito criativa.",
      author: "Sofia Rodrigues",
      avatar: "/placeholder.svg?height=60&width=60&text=SR",
      position: "left",
    },
    {
      text: "Entrega no prazo sempre!",
      author: "Rafael Alves",
      avatar: "/placeholder.svg?height=60&width=60&text=RA",
      position: "right",
    },
    {
      text: "Investimento que vale a pena.",
      author: "Beatriz Ferreira",
      avatar: "/placeholder.svg?height=60&width=60&text=BF",
      position: "center",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-[#f5f3e7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#464545] mb-6">
            O que nossos <span className="text-[#e2bfff]">clientes</span> dizem
          </h2>
          <p className="text-lg md:text-xl text-[#464545]/80 max-w-2xl mx-auto">
            Depoimentos reais de quem confiou em nosso trabalho
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {/* Row 1 */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[0].avatar || "/placeholder.svg"}
                alt={testimonials[0].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[0].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-xs">
              <img
                src={testimonials[1].avatar || "/placeholder.svg"}
                alt={testimonials[1].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[1].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[2].avatar || "/placeholder.svg"}
                alt={testimonials[2].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[2].text}</p>
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-xs">
              <img
                src={testimonials[3].avatar || "/placeholder.svg"}
                alt={testimonials[3].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[3].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[4].avatar || "/placeholder.svg"}
                alt={testimonials[4].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[4].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-xs">
              <img
                src={testimonials[5].avatar || "/placeholder.svg"}
                alt={testimonials[5].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[5].text}</p>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[6].avatar || "/placeholder.svg"}
                alt={testimonials[6].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[6].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[7].avatar || "/placeholder.svg"}
                alt={testimonials[7].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[7].text}</p>
              </div>
            </div>

            <div className="bg-white rounded-full px-6 py-4 border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] flex items-center gap-4 max-w-sm">
              <img
                src={testimonials[8].avatar || "/placeholder.svg"}
                alt={testimonials[8].author}
                className="w-12 h-12 rounded-full border-2 border-[#464545]"
              />
              <div>
                <p className="font-bold text-[#464545] text-sm">{testimonials[8].text}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#e2bfff] text-[#464545] font-black px-10 py-5 text-xl rounded-full border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545] hover:shadow-[4px_4px_0px_0px_#464545] hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
            Seja o Próximo Depoimento
          </button>
        </motion.div>
      </div>
    </section>
  )
}
