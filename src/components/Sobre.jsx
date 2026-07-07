import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Palette, Users, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const pillars = [
  {
    icon: Heart,
    title: 'Feito à mão',
    desc: 'Cada obra é única, traçada com cuidado e intenção.',
  },
  {
    icon: Palette,
    title: 'Personalizado',
    desc: 'Desenvolvido exclusivamente para refletir a sua história.',
  },
  {
    icon: Users,
    title: 'Humanizado',
    desc: 'Atendimento próximo e afetivo do início ao fim.',
  },
  {
    icon: Sparkles,
    title: 'Arte exclusiva',
    desc: 'Criações que emocionam e ficam na memória.',
  },
]

export default function Sobre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sobre"
      className="py-24 lg:py-36 bg-[#efeeeb]"
      aria-label="Sobre a Letras da Graci"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image area */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div
              className="aspect-[4/5] rounded-lg overflow-hidden max-w-md mx-auto lg:mx-0 shadow-lg"
            >
              <img
                src="/imgs/perfil001.jpeg"
                alt="Foto da artista Graci"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent quote card */}
            <div
              className="absolute -bottom-6 right-0 lg:-right-6 bg-white rounded-lg p-5 shadow-xl shadow-[#884530]/10 max-w-[220px] border-l-2 border-[#a65d46]"
              aria-hidden="true"
            >
              <p className="font-serif text-sm italic text-[#54433e] leading-relaxed">
                "Cada traço carrega uma emoção."
              </p>
              <p className="font-sans text-xs text-[#86736d] mt-2 font-semibold">— Graci</p>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-16 h-16 border border-[#d9c1bb] rounded-lg"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.p
              className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#86736d] mb-4"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Sobre mim
            </motion.p>

            <motion.h2
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1c1a] leading-[1.2] mb-6"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              A Arte de{' '}
              <em className="italic text-[#884530]">Eternizar</em>
              <br />
              Momentos
            </motion.h2>

            <motion.p
              className="font-sans text-base lg:text-lg text-[#54433e] leading-relaxed mb-8"
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Sou uma artista e designer apaixonada por cores, formas e detalhes. Trabalho com pinturas em paredes e canecas criando artes únicas que transformam ambientes e objetos em algo especial.
            </motion.p>

            <motion.p
              className="font-sans text-sm text-[#86736d] leading-relaxed mb-10"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Cada projeto é feito à mão com carinho, criatividade e atenção ao que cada cliente sonha. A arte para mim é uma forma de expressar sentimento e dar identidade a cada espaço.
            </motion.p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  custom={4 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="bg-white/70 rounded-lg p-4 hover:bg-white hover:shadow-lg hover:shadow-[#884530]/8 transition-all duration-300 group"
                >
                  <Icon
                    size={20}
                    className="text-[#884530] mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-serif text-base font-medium text-[#1a1c1a] mb-1">{title}</h3>
                  <p className="font-sans text-xs text-[#86736d] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
