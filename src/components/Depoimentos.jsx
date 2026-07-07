import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Renan e Vitória',
    role: 'Noivos',
    event: 'Casamento',
    text: 'Nós quem agradecemos muito por ter aceitado fazer parte desse momento e bem encima da hora, amamos muito o quadro, depois que tu foi embora ele virou atração, todo mundo indo ver, estavamos conversando hoje que é algo tão significativo pois é o exato momento do nosso casamento congelado numa pintura, amamos de verdade 🤍 Te desejo todo o sucesso do mundo, que tuas pinturas esteja em muitos casamentos deixando o momento de cada casal ainda mais lindo.🤍',
    rating: 5,
    initial: 'R',
    accentBg: '#ffdbd0',
    accentText: '#884530',
  },
  {
    id: 2,
    name: 'Matheus e Evelyn Rechia',
    role: 'Noivos',
    event: 'Casamento',
    text: 'Sem palavras… de verdade. Só gratidão por esse presente tão especial. Você conseguiu transformar um instante nosso em algo eterno, e a gente sentiu todo o carinho colocado em cada detalhe. Dá pra perceber que esse talento vem de Deus. Que Deus continue abençoando muito a tua vida e tudo aquilo que você faz. Obrigado de coração! 🙏🏻',
    rating: 5,
    initial: 'M',
    accentBg: '#e1e6b8',
    accentText: '#5c613d',
  },
  {
    id: 3,
    name: 'Ana Velloso',
    role: 'Cliente',
    event: 'Transformação',
    text: 'Eu que te agradeço pela parceria nessas transformações muito significativas, que vão refletindo as superações da vida!',
    rating: 5,
    initial: 'A',
    accentBg: '#fcdcc9',
    accentText: '#6a5445',
  },
]

export default function Depoimentos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section
      id="depoimentos"
      className="py-24 lg:py-36 bg-[#efeeeb]"
      aria-label="Depoimentos de clientes"
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
            Histórias reais
          </motion.p>
          <motion.h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1c1a] leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            O que dizem{' '}
            <em className="italic text-[#884530]">os clientes</em>
          </motion.h2>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-lg p-7 hover:shadow-xl hover:shadow-[#884530]/10 transition-all duration-400 group"
              whileHover={{ y: -4 }}
            >
              <TestimonialContent t={t} />
            </motion.article>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.article
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg p-7"
            >
              <TestimonialContent t={testimonials[active]} />
            </motion.article>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#d9c1bb] hover:border-[#884530] hover:text-[#884530] flex items-center justify-center transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2" aria-label="Indicadores de depoimento">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'bg-[#884530] w-6' : 'bg-[#d9c1bb]'
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                    aria-pressed={i === active}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#d9c1bb] hover:border-[#884530] hover:text-[#884530] flex items-center justify-center transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-20 pt-16 border-t border-[#d9c1bb]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { value: '200+', label: 'Obras entregues' },
            { value: '5★', label: 'Avaliação média' },
            { value: '100%', label: 'Clientes satisfeitos' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-[#884530]">{value}</p>
              <p className="font-sans text-xs lg:text-sm text-[#86736d] mt-2">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialContent({ t }) {
  return (
    <>
      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label={`${t.rating} estrelas`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-[#a65d46] fill-[#a65d46]" aria-hidden="true" />
        ))}
      </div>

      {/* Quote icon */}
      <Quote size={28} className="text-[#d9c1bb] mb-4 rotate-180" aria-hidden="true" />

      {/* Text */}
      <p className="font-serif text-base italic text-[#54433e] leading-relaxed mb-6">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#efeeeb]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
          style={{ background: t.accentBg, color: t.accentText }}
          aria-hidden="true"
        >
          {t.initial}
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-[#1a1c1a]">{t.name}</p>
          <p className="font-sans text-xs text-[#86736d]">{t.event}</p>
        </div>
      </div>
    </>
  )
}
