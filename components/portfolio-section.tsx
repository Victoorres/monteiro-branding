"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ArrowLeft, ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      name: "TechFlow",
      category: "Startup de Tecnologia",
      color: "#e2bfff",
      description:
        "Identidade visual completa para startup de tecnologia focada em soluções inovadoras. Desenvolvemos desde o logo até aplicações digitais e materiais corporativos.",
      items: [
        { type: "logo", size: "large", content: "TF", image: "/placeholder.svg?height=400&width=400" },
        { type: "app", size: "medium", content: "📱", image: "/placeholder.svg?height=300&width=200" },
        { type: "card", size: "small", content: "💳", image: "/placeholder.svg?height=200&width=300" },
        { type: "web", size: "medium", content: "🌐", image: "/placeholder.svg?height=300&width=400" },
        { type: "print", size: "small", content: "📄", image: "/placeholder.svg?height=200&width=200" },
      ],
    },
    {
      name: "Verde Café",
      category: "Café Artesanal",
      color: "#e7eaa1",
      description:
        "Branding completo para cafeteria artesanal, incluindo identidade visual, embalagens e sinalização. Projeto focado em sustentabilidade e qualidade.",
      items: [
        { type: "logo", size: "large", content: "VC", image: "/placeholder.svg?height=400&width=400" },
        { type: "package", size: "medium", content: "📦", image: "/placeholder.svg?height=300&width=250" },
        { type: "cup", size: "small", content: "☕", image: "/placeholder.svg?height=200&width=200" },
        { type: "menu", size: "medium", content: "📋", image: "/placeholder.svg?height=400&width=300" },
        { type: "sign", size: "small", content: "🪧", image: "/placeholder.svg?height=200&width=300" },
      ],
    },
    {
      name: "MedCare",
      category: "Clínica Médica",
      color: "#e2bfff",
      description:
        "Identidade visual para clínica médica moderna, transmitindo confiança e profissionalismo. Incluindo uniformes, aplicações digitais e materiais institucionais.",
      items: [
        { type: "logo", size: "large", content: "MC", image: "/placeholder.svg?height=400&width=400" },
        { type: "uniform", size: "medium", content: "👔", image: "/placeholder.svg?height=300&width=200" },
        { type: "card", size: "small", content: "🏥", image: "/placeholder.svg?height=200&width=300" },
        { type: "app", size: "medium", content: "📱", image: "/placeholder.svg?height=300&width=200" },
        { type: "folder", size: "small", content: "📁", image: "/placeholder.svg?height=200&width=250" },
      ],
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-3 row-span-3 h-64 md:h-80 lg:h-96"
      case "medium":
        return "col-span-2 row-span-2 h-32 md:h-48 lg:h-56"
      case "small":
        return "col-span-1 row-span-1 h-16 md:h-24 lg:h-28"
      default:
        return "col-span-1 row-span-1 h-16 md:h-24 lg:h-28"
    }
  }

  const openImageModal = (image: string) => {
    setSelectedImage(image)
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModals = () => {
    setSelectedImage(null)
    setSelectedProject(null)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.items.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.items.length) % selectedProject.items.length)
    }
  }

  return (
    <>
      <section id="portfólio" className="py-16 md:py-24 px-4 bg-[#f5f3e7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#464545] mb-6">
              Nosso <span className="text-[#e2bfff]">portfólio</span>
            </h2>
            <p className="text-lg md:text-xl text-[#464545]/80 max-w-2xl mx-auto">
              Projetos que transformaram a identidade de nossos clientes
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, projectIndex) => (
              <motion.div
                key={projectIndex}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: projectIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Header */}
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-black text-[#464545] mb-2">{project.name}</h3>
                  <p className="text-lg text-[#464545]/70 font-semibold">{project.category}</p>
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 auto-rows-min">
                  {project.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className={`${getSizeClasses(item.size)} bg-[#464545] rounded-2xl md:rounded-3xl border-4 border-[#464545] shadow-[6px_6px_0px_0px_#464545] hover:shadow-[3px_3px_0px_0px_#464545] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 cursor-pointer group overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openImageModal(item.image)}
                    >
                      {item.type === "logo" ? (
                        <div
                          className="w-full h-full flex items-center justify-center text-4xl md:text-6xl lg:text-8xl font-black border-4 border-[#464545] rounded-2xl md:rounded-3xl"
                          style={{ backgroundColor: project.color }}
                        >
                          <span className="text-[#464545]">{item.content}</span>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-[#f5f3e7] border-4 border-[#464545] rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-200">
                          {item.content}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Info Card */}
                  <motion.div
                    className="col-span-3 row-span-1 h-16 md:h-24 lg:h-28 bg-[#f5f3e7] rounded-2xl md:rounded-3xl border-4 border-[#464545] shadow-[6px_6px_0px_0px_#464545] hover:shadow-[3px_3px_0px_0px_#464545] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 cursor-pointer flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="text-center">
                      <p className="text-sm md:text-base lg:text-lg font-black text-[#464545]">Ver Projeto Completo</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#464545] text-[#f5f3e7] font-black px-10 py-5 text-xl rounded-full border-4 border-[#f5f3e7] shadow-[8px_8px_0px_0px_#464545] hover:shadow-[4px_4px_0px_0px_#464545] hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
              Ver Todos os Projetos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Single Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModals}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-[#f5f3e7] rounded-3xl border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-[#e2bfff] text-[#464545] p-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 z-10"
              onClick={closeModals}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage || "/placeholder.svg"} alt="Projeto" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModals}
        >
          <motion.div
            className="relative max-w-6xl max-h-[90vh] bg-[#f5f3e7] rounded-3xl border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="flex-1 relative bg-[#464545] flex items-center justify-center">
                <button
                  className="absolute top-4 right-4 bg-[#e2bfff] text-[#464545] p-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 z-10"
                  onClick={closeModals}
                >
                  <X className="w-6 h-6" />
                </button>

                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#e7eaa1] text-[#464545] p-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                  onClick={prevImage}
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#e7eaa1] text-[#464545] p-3 rounded-full border-4 border-[#464545] shadow-[4px_4px_0px_0px_#464545] hover:shadow-[2px_2px_0px_0px_#464545] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                  onClick={nextImage}
                >
                  <ArrowRight className="w-6 h-6" />
                </button>

                <img
                  src={selectedProject.items[currentImageIndex].image || "/placeholder.svg"}
                  alt={`${selectedProject.name} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Info Section */}
              <div className="lg:w-96 p-8 overflow-y-auto">
                <h3 className="text-3xl font-black text-[#464545] mb-2">{selectedProject.name}</h3>
                <p className="text-lg text-[#464545]/70 font-semibold mb-6">{selectedProject.category}</p>
                <p className="text-[#464545] leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="space-y-3">
                  <h4 className="text-xl font-black text-[#464545]">Aplicações:</h4>
                  {selectedProject.items.map((item: any, index: number) => (
                    <button
                      key={index}
                      className={`w-full text-left p-3 rounded-2xl border-2 border-[#464545] font-semibold transition-all duration-150 ${
                        index === currentImageIndex
                          ? "bg-[#e2bfff] shadow-[2px_2px_0px_0px_#464545]"
                          : "bg-white hover:bg-[#e7eaa1] hover:shadow-[2px_2px_0px_0px_#464545]"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      {item.content} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
