"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Zap, Target, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ScrollingText from "@/components/scrolling-text"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estratégia de Marca",
      description: "Definimos o posicionamento e personalidade da sua marca no mercado",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Identidade Visual",
      description: "Criamos logos, paletas e elementos visuais únicos e memoráveis",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Branding Completo",
      description: "Desenvolvemos toda a experiência da marca do conceito à aplicação",
    },
  ]

  const projects = [
    { title: "Tech Startup", category: "Tecnologia", color: "#e2bfff" },
    { title: "Café Artesanal", category: "Alimentação", color: "#e7eaa1" },
    { title: "Clínica Médica", category: "Saúde", color: "#e2bfff" },
    { title: "E-commerce", category: "Varejo", color: "#e7eaa1" },
  ]

  return (
    <div className="min-h-screen bg-[#464545] text-[#f5f3e7] overflow-hidden">
      <Navbar />
      <HeroSection containerRef={containerRef} y={y} opacity={opacity} />
      <ScrollingText />
      <ServicesSection services={services} />
      <PortfolioSection projects={projects} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
