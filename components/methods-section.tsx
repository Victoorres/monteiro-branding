'use client';

import { motion } from 'framer-motion';

export default function MethodsSection() {
  const processSteps = [
    {
      title: 'Briefing',
      subtitle: 'Entendendo seu negócio',
      description:
        'Conversamos sobre seus objetivos, público-alvo e necessidades específicas para criar a estratégia perfeita.',
      image: '/placeholder.svg?height=200&width=200',
      detail: 'DESCOBERTA',
    },
    {
      title: 'Pesquisa',
      subtitle: 'Analisando o mercado',
      description: 'Estudamos seus concorrentes, tendências do setor e oportunidades para posicionar sua marca.',
      image: '/placeholder.svg?height=200&width=200',
      detail: 'ANÁLISE',
    },
    {
      title: 'Criação',
      subtitle: 'Desenvolvendo conceitos',
      description: 'Criamos múltiplas opções de identidade visual, testamos cores, tipografias e elementos gráficos.',
      image: '/placeholder.svg?height=200&width=200',
      detail: 'DESIGN',
    },
    {
      title: 'Refinamento',
      subtitle: 'Aperfeiçoando detalhes',
      description: 'Ajustamos cada elemento baseado no seu feedback até alcançarmos a identidade visual perfeita.',
      image: '/placeholder.svg?height=200&width=200',
      detail: 'AJUSTES',
    },
    {
      title: 'Entrega',
      subtitle: 'Sua marca voando alto',
      description:
        'Entregamos todos os arquivos, manual da marca e orientações para aplicação em diferentes materiais.',
      image: '/placeholder.svg?height=200&width=200',
      detail: 'SUCESSO',
    },
  ];

  return (
    <section id="métodos" className="py-16 md:py-24 px-4 bg-[#f5f3e7]">
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
            Como é o nosso <span className="text-[#e2bfff]">processo criativo</span>{' '}
          </h2>
          <p className="text-lg md:text-xl text-[#464545]/80 max-w-2xl mx-auto">
            Do primeiro rascunho à marca pronta para o mundo
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-[#464545] hidden lg:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <motion.div className="relative mb-8" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  {/* Process Image */}
                  <div className="w-32 h-32 mx-auto bg-[#464545] rounded-3xl border-4 border-[#464545] shadow-[6px_6px_0px_0px_#464545] overflow-hidden">
                    <img
                      src={step.image || '/placeholder.svg'}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#e7eaa1] rounded-full border-4 border-[#464545] shadow-[3px_3px_0px_0px_#464545] flex items-center justify-center">
                    <span className="text-sm font-black text-[#464545]">{index + 1}</span>
                  </div>
                </motion.div>

                {/* Content with Fixed Height */}
                <div className="flex flex-col justify-between min-h-[250px]">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#464545] mb-2">{step.title}</h3>
                    <p className="text-sm font-bold text-[#464545]/70 mb-3">{step.subtitle}</p>
                    <p className="text-sm text-[#464545]/60 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Sempre no rodapé do card */}
                  <div className="mt-4">
                    <div className="inline-block bg-[#464545] text-[#f5f3e7] px-4 py-2 rounded-full text-xs font-black">
                      {step.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#464545] rounded-3xl border-4 border-[#464545] shadow-[8px_8px_0px_0px_#464545] p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-[#f5f3e7] mb-4">Pronto para decolar? 🚀</h3>
            <p className="text-[#f5f3e7]/80 mb-6">
              Vamos transformar sua marca em algo extraordinário seguindo nosso processo comprovado.
            </p>
            <button className="bg-[#e7eaa1] text-[#464545] font-black px-8 py-4 text-lg rounded-full border-4 border-[#464545] shadow-[6px_6px_0px_0px_#464545] hover:shadow-[3px_3px_0px_0px_#464545] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150">
              Começar Meu Projeto
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
