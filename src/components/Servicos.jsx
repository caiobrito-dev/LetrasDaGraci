import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brush, Home, Coffee, Type, Shirt, ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'pintura-vivo',
    icon: Brush,
    tag: 'Premium',
    tagColor: 'bg-[#ffdbd0] text-[#884530]',
    title: 'Pintura ao Vivo em Casamentos',
    description:
      'Uma experiência inesquecível para seus convidados e uma obra de arte única como lembrança do seu grande dia.',
    details: ['Tela personalizada', 'Performance ao vivo', 'Moldura inclusa'],
    accent: '#884530',
  },
  {
    id: 'pintura-paredes',
    icon: Home,
    tag: 'Ambientes',
    tagColor: 'bg-[#e1e6b8] text-[#5c613d]',
    title: 'Pintura em Paredes',
    description:
      'Murais afetuosos e personalizados que trazem vida e personalidade para ambientes residenciais e comerciais.',
    details: ['Mural exclusivo', 'Residencial ou comercial', 'Arte durável'],
    accent: '#5c613d',
  },
  {
    id: 'canecas',
    icon: Coffee,
    tag: 'Presentes',
    tagColor: 'bg-[#fcdcc9] text-[#6a5445]',
    title: 'Canecas Personalizadas',
    description:
      'Peças exclusivas pintadas à mão para presentear com significado e afeto.',
    details: ['Pintura à mão', 'Tema personalizado', 'Embalagem especial'],
    accent: '#6a5445',
  },
  {
    id: 'lettering',
    icon: Type,
    tag: 'Comunicação',
    tagColor: 'bg-[#e1e6b8] text-[#5c613d]',
    title: 'Lettering',
    description:
      'Comunicação elegante para painéis, lousas e itens de papelaria com traços únicos.',
    details: ['Painéis e lousas', 'Papelaria premium', 'Tipografia exclusiva'],
    accent: '#884530',
  },
  {
    id: 'jaquetas',
    icon: Shirt,
    tag: 'Arte Vestível',
    tagColor: 'bg-[#fcdcc9] text-[#6a5445]',
    title: 'Jaquetas Customizadas',
    description:
      'Arte vestível com design único criado especialmente para você expressar sua identidade.',
    details: ['Design exclusivo', 'Pintura permanente', 'Peça única'],
    accent: '#6a5445',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function Servicos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="servicos"
      className="py-24 lg:py-36 bg-[#faf9f6]"
      aria-label="Serviços da Letras da Graci"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20" ref={ref}>
          <motion.p
            className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#86736d] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            O que ofereço
          </motion.p>
          <motion.h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1c1a] leading-[1.2] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Serviços
          </motion.h2>
          <motion.p
            className="font-sans text-base text-[#54433e] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transformando ideias e emoções em criações tangíveis e sofisticadas para o seu grande dia ou para a sua marca.
          </motion.p>
        </div>

        {/* Services grid: first 2 large, rest 3 smaller */}
        <div className="space-y-6">
          {/* Top two featured cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} isInView={isInView} large />
            ))}
          </div>
          {/* Bottom three cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(2).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i + 2} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isInView, large = false }) {
  const { icon: Icon, tag, tagColor, title, description, details, accent } = service

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`group relative bg-[#f4f3f1] rounded-lg p-7 lg:p-8 cursor-pointer overflow-hidden
        hover:bg-white hover:shadow-2xl hover:shadow-[#884530]/10 transition-all duration-500
        ${large ? 'min-h-[280px]' : 'min-h-[220px]'}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Background accent on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 80% 10%, ${accent}08 0%, transparent 60%)` }}
        aria-hidden="true"
      />

      {/* Tag */}
      <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${tagColor}`}>
        {tag}
      </span>

      {/* Icon + Title row */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-xl lg:text-2xl font-medium text-[#1a1c1a] leading-snug pr-4">
          {title}
        </h3>
        <div
          className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `${accent}15` }}
        >
          <Icon size={20} style={{ color: accent }} />
        </div>
      </div>

      {/* Description */}
      <p className="font-sans text-sm text-[#54433e] leading-relaxed mb-5">
        {description}
      </p>

      {/* Details */}
      <ul className="flex flex-wrap gap-2" aria-label={`Detalhes de ${title}`}>
        {details.map((d) => (
          <li
            key={d}
            className="font-sans text-xs text-[#86736d] bg-[#efeeeb] group-hover:bg-[#faf9f6] px-3 py-1 rounded-full transition-colors duration-300"
          >
            {d}
          </li>
        ))}
      </ul>

      {/* Arrow on hover */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <ArrowUpRight size={20} style={{ color: accent }} />
      </div>
    </motion.article>
  )
}
