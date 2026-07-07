const InstagramIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[#1a1c1a] text-[#f2f1ee]"
      role="contentinfo"
      aria-label="Rodapé Letras da Graci"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block font-serif text-2xl font-medium text-[#ffb59e] mb-4"
              aria-label="Letras da Graci – voltar ao topo"
            >
              Letras da Graci
            </a>
            <p className="font-sans text-sm text-[#f2f1ee]/60 leading-relaxed mb-6 max-w-sm">
              Arte feita à mão com alma brasileira. Criações exclusivas em pintura e lettering para eternizar momentos que importam.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/letrasdagraci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#f2f1ee]/60 hover:text-[#ffb59e] transition-colors duration-300 text-sm"
                aria-label="Instagram da Letras da Graci"
              >
                <InstagramIcon size={16} />
                @letrasdagraci
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Links do rodapé">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#f2f1ee]/40 mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#f2f1ee]/60 hover:text-[#ffb59e] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#f2f1ee]/40 mb-5">
              Contato
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/5553984443200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#f2f1ee]/60 hover:text-[#ffb59e] transition-colors duration-300 group"
                aria-label="WhatsApp da Letras da Graci"
              >
                <span className="w-8 h-8 rounded-full bg-[#884530]/20 group-hover:bg-[#884530]/40 flex items-center justify-center transition-colors duration-300">
                  <WhatsAppIcon />
                </span>
                <span className="font-sans text-sm">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/letrasdagraci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#f2f1ee]/60 hover:text-[#ffb59e] transition-colors duration-300 group"
                aria-label="Instagram da Letras da Graci"
              >
                <span className="w-8 h-8 rounded-full bg-[#884530]/20 group-hover:bg-[#884530]/40 flex items-center justify-center transition-colors duration-300">
                  <InstagramIcon size={16} />
                </span>
                <span className="font-sans text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f2f1ee]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#f2f1ee]/40 text-center sm:text-left">
            © {year} Letras da Graci. Arte feita à mão com amor e carinho.
          </p>
        </div>
      </div>
    </footer>
  )
}
