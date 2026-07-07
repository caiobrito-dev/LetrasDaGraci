import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f6]"
      aria-label="Seção principal"
    >
      {/* Decorative Background Elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Terracotta blob top-right */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#ffdbd0]/30 blur-[120px]" />
        {/* Sage blob bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-[#e1e6b8]/40 blur-[100px]" />
        {/* Thin horizontal rule */}
        <div className="hidden lg:block absolute left-16 lg:left-32 top-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#d9c1bb] to-transparent" />
      </div>

      {/* Label + decorative line */}
      <div className="absolute top-8 left-6 lg:left-16 hidden lg:flex items-center gap-4 mt-20">
        <span className="block w-8 h-px bg-[#86736d]" aria-hidden="true" />
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#86736d]">
          Arte Feita à Mão
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Eyebrow tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-[#e1e6b8]/60 text-[#5c613d] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5c613d]" aria-hidden="true" />
                Casamentos · Eventos · Marcas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1c1a] leading-[1.08] tracking-[-0.02em] mb-6"
            >
              Sua história{' '}
              <em className="italic text-[#884530] not-italic" style={{ fontStyle: 'italic' }}>
                contada
              </em>
              <br />
              em cores e traços
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base lg:text-lg text-[#54433e] leading-relaxed mb-8 max-w-lg"
            >
              Criações exclusivas e afetuosas em pintura e lettering, pensadas para eternizar histórias com a sofisticação que o seu momento merece.
            </motion.p>

            {/* Attributes */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {['Feito à mão', 'Personalizado', 'Atendimento humanizado', 'Arte exclusiva'].map((attr) => (
                <span
                  key={attr}
                  className="flex items-center gap-2 font-sans text-sm text-[#54433e]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#a65d46]" aria-hidden="true" />
                  {attr}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5553984443200?text=Olá%20Graci!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-3 bg-[#884530] hover:bg-[#a65d46] text-white font-semibold text-sm px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:shadow-[#884530]/20 hover:-translate-y-0.5 group"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                <WhatsAppIcon />
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                id="hero-cta-portfolio"
                className="inline-flex items-center justify-center gap-2 border border-[#86736d] hover:border-[#884530] text-[#54433e] hover:text-[#884530] font-sans italic text-sm font-medium px-8 py-4 rounded transition-all duration-300 hover:bg-[#ffdbd0]/10"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Ver Portfólio
                <ArrowDown size={16} className="rotate-[-45deg]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Main image container */}
            <div className="relative max-w-md mx-auto lg:ml-auto">
              {/* Main image frame */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden">
                {/* Hero image - real photo */}
                <img
                  src="/imgs/parede.jpg"
                  alt="Arte da Graci"
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner frame */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#a65d46]/60" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#a65d46]/60" aria-hidden="true" />
              </div>

              {/* Graci Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-32 h-32 lg:w-48 lg:h-48 rounded-full border-[6px] border-[#faf9f6] shadow-xl overflow-hidden z-10"
              >
                <img src="/imgs/avatar.png" alt="Graci" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-lg shadow-xl shadow-[#884530]/10 px-5 py-3 border border-[#efeeeb]"
            >
              <p className="font-serif text-2xl text-[#884530]">200+</p>
              <p className="font-sans text-xs text-[#86736d] mt-0.5">obras entregues</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex items-center gap-3 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-[#86736d]" />
          </motion.div>
          <span className="font-sans text-xs uppercase tracking-[0.1em] text-[#86736d]">
            Rolar para descobrir
          </span>
        </motion.div>
      </div>
    </section>
  )
}
