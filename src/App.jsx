import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Servicos from './components/Servicos.jsx'
import Portfolio from './components/Portfolio.jsx'
import Processo from './components/Processo.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Processo />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
