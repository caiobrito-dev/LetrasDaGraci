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
    image: '/imgs/WhatsApp Image 2026-05-06 at 3.07.13 PM.jpeg',
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
    image: '/imgs/chao.jpg',
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
    image: '/imgs/rede.jpg',
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
    image: '/imgs/WhatsApp Image 2026-05-06 at 3.09.22 PM.jpeg',
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
    image: '/imgs/perfil001.jpeg',
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
  const { icon: Icon, tag, tagColor, title, description, details, accent, image } = service

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`group relative bg-[#f4f3f1] rounded-lg cursor-pointer overflow-hidden flex flex-col
        hover:bg-white hover:shadow-2xl hover:shadow-[#884530]/10 transition-all duration-500
        ${large ? 'min-h-[280px]' : 'min-h-[220px]'}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Image Header */}
      <div 
        className={`relative w-full overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          large ? 'h-48 group-hover:h-80' : 'h-40 group-hover:h-64'
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-7 lg:p-8 flex-1 flex flex-col relative">
        {/* Background accent on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 80% 10%, ${accent}08 0%, transparent 60%)` }}
          aria-hidden="true"
        />

        {/* Tag */}
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-max ${tagColor}`}>
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
        <p className="font-sans text-sm text-[#54433e] leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Details */}
        <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`Detalhes de ${title}`}>
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
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <ArrowUpRight size={20} style={{ color: accent }} />
        </div>
      </div>
    </motion.article>
  )
}
