import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

// Gallery items — in production replace with real images
const galleryItems = [
  {
    id: 1,
    title: 'Pintura ao Vivo – Casamento Silva',
    category: 'Casamento',
    span: 'md:col-span-2 md:row-span-2',
    bg: "url('/imgs/quadro.jpg') center/cover no-repeat",
    size: 'large',
  },
  {
    id: 2,
    title: 'Lettering Painel',
    category: 'Lettering',
    span: '',
    bg: "url('/imgs/parede.jpg') center/cover no-repeat",
    size: 'small',
  },
  {
    id: 3,
    title: 'Canecas Padrinhos',
    category: 'Presentes',
    span: '',
    bg: "url('/imgs/parede002.jpg') center/cover no-repeat",
    size: 'small',
  },
  {
    id: 4,
    title: 'Mural Residencial',
    category: 'Mural',
    span: 'md:col-span-2',
    bg: "url('/imgs/parede003.jpg') center/cover no-repeat",
    size: 'medium',
  },
  {
    id: 5,
    title: 'Jaqueta Customizada',
    category: 'Arte Vestível',
    span: '',
    bg: "url('/imgs/chao.jpg') center/cover no-repeat",
    size: 'small',
  },
  {
    id: 6,
    title: 'Lettering Casamento',
    category: 'Casamento',
    span: '',
    bg: "url('/imgs/rede.jpg') center/cover no-repeat",
    size: 'small',
  },
]

const categories = ['Todos', 'Casamento', 'Lettering', 'Mural', 'Presentes', 'Arte Vestível']

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered =
    activeCategory === 'Todos'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory)

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-36 bg-[#efeeeb]"
      aria-label="Portfólio Letras da Graci"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" ref={ref}>
          <div>
            <motion.p
              className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#86736d] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Trabalhos recentes
            </motion.p>
            <motion.h2
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1c1a] leading-[1.2]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Portfólio & Galeria
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="group"
            aria-label="Filtrar por categoria"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#884530] text-white shadow-md shadow-[#884530]/20'
                    : 'bg-white/70 text-[#54433e] hover:bg-white hover:text-[#884530]'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-lg overflow-hidden cursor-pointer group ${item.span}`}
                style={{ background: item.bg }}
                onClick={() => setLightboxItem(item)}
                aria-label={`Ver ${item.title}`}
                type="button"
              >
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1a1c1a]/0 group-hover:bg-[#1a1c1a]/40 transition-all duration-400" />

                {/* Center icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a1c1a]/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="font-serif text-white text-sm font-medium">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://www.instagram.com/letrasdagraci"
            target="_blank"
            rel="noopener noreferrer"
            id="portfolio-instagram-cta"
            className="inline-flex items-center gap-2 border border-[#86736d] hover:border-[#884530] text-[#54433e] hover:text-[#884530] font-serif italic text-sm px-8 py-4 rounded transition-all duration-300 hover:bg-[#ffdbd0]/10"
          >
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1c1a]/90 backdrop-blur-sm p-6"
            onClick={() => setLightboxItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Visualizando: ${lightboxItem?.title}`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-2xl w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
              style={{ background: lightboxItem?.bg }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-serif text-white text-2xl italic">{lightboxItem?.title}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label="Fechar visualização"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
