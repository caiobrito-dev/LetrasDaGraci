import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contato"
      className="py-24 lg:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1c1a 0%, #2f312f 50%, #3a2820 100%)' }}
      aria-label="Seção de contato e call to action"
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#884530]/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#a65d46]/10 blur-[80px]" />
        <div className="absolute top-1/2 left-0 w-px h-40 bg-gradient-to-b from-transparent via-[#d9c1bb]/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-[#d9c1bb]/20 to-transparent" />
      </div>



      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center relative z-10">
        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#ffb59e] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Vamos criar juntos
        </motion.p>

        <motion.h2
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Pronto para{' '}
          <em className="italic text-[#ffb59e]">transformar</em>
          <br />
          sua história em arte?
        </motion.h2>

        <motion.p
          className="font-sans text-base lg:text-lg text-[#f2f1ee]/70 leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Entre em contato para conversarmos sobre o seu projeto. Cada trabalho é único e feito sob medida para você.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5553984443200?text=Olá%20Graci!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20transformar%20minha%20história%20em%20arte!"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-final-whatsapp"
            className="inline-flex items-center justify-center gap-3 bg-[#884530] hover:bg-[#a65d46] text-white font-semibold text-base px-10 py-5 rounded transition-all duration-300 hover:shadow-2xl hover:shadow-[#884530]/40 hover:-translate-y-1 group"
            aria-label="Entrar em contato via WhatsApp"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <a
            href="https://www.instagram.com/letrasdagraci"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-final-instagram"
            className="inline-flex items-center justify-center gap-2 border border-[#d9c1bb]/50 hover:border-[#ffb59e] text-[#f2f1ee] hover:text-[#ffb59e] font-serif italic text-base px-10 py-5 rounded transition-all duration-300"
          >
            Ver no Instagram
          </a>
        </motion.div>

        {/* Signature decoration */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          aria-hidden="true"
        >
          <div className="w-16 h-px bg-[#d9c1bb]/30" />
          <p className="font-serif text-2xl italic text-[#ffb59e]/60">Graci</p>
          <div className="w-16 h-px bg-[#d9c1bb]/30" />
        </motion.div>
      </div>
    </section>
  )
}
