import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, FileText, Wand2, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contato',
    description:
      'Entendemos suas necessidades e a visão inicial para o projeto. Uma conversa afetuosa para alinhar expectativas.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Briefing',
    description:
      'Alinhamento de referências, paleta de cores e detalhes técnicos. Tudo documentado para garantir a perfeição.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'Criação',
    description:
      'Desenvolvimento dos esboços e aprovação da arte final. Sua participação é essencial nesta etapa.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Entrega / Execução',
    description:
      'O momento de dar vida à arte no seu evento ou ambiente. A magia acontece diante dos seus olhos.',
  },
]

export default function Processo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="processo"
      className="py-24 lg:py-36 bg-[#faf9f6] overflow-hidden"
      aria-label="Como funciona o processo criativo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.p
            className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#86736d] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Como funciona
          </motion.p>
          <motion.h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1c1a] leading-[1.2] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Processo
          </motion.h2>
          <motion.p
            className="font-sans text-base text-[#54433e] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Um processo cuidadoso e focado em entregar a melhor experiência, do primeiro contato à obra finalizada.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#d9c1bb]"
            style={{ top: '3.25rem' }}
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#884530] to-[#a65d46]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
                aria-label={`Etapa ${number}: ${title}`}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-12 h-12 mb-6 rounded-full border-2 border-[#d9c1bb] bg-[#faf9f6] flex items-center justify-center group-hover:border-[#884530] group-hover:bg-[#884530] transition-all duration-400">
                  <span className="font-serif text-sm font-medium text-[#86736d] group-hover:text-white transition-colors duration-300">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-[#f4f3f1] group-hover:bg-white rounded-lg p-6 transition-all duration-400 hover:shadow-xl hover:shadow-[#884530]/8">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      size={18}
                      className="text-[#884530] flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="font-serif text-xl font-medium text-[#1a1c1a]">{title}</h3>
                  </div>
                  <p className="font-sans text-sm text-[#54433e] leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="font-sans text-sm text-[#86736d] mb-4">Pronto para começar?</p>
          <a
            href="https://wa.me/5511999999999?text=Olá%20Graci!%20Gostaria%20de%20iniciar%20o%20processo%20criativo."
            target="_blank"
            rel="noopener noreferrer"
            id="processo-cta-whatsapp"
            className="inline-flex items-center gap-2 bg-[#884530] hover:bg-[#a65d46] text-white font-semibold text-sm px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:shadow-[#884530]/20 hover:-translate-y-0.5"
          >
            Iniciar meu projeto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
