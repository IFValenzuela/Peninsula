import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import EquipoPage from './pages/EquipoPage'
import EspecialidadesPage from './pages/EspecialidadesPage'
import TestimoniosPage from './pages/TestimoniosPage'
import ContactoPage from './pages/ContactoPage'
import DoctorPage from './pages/DoctorPage'

// Scroll to top on every navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/equipo" element={<Layout><EquipoPage /></Layout>} />
        <Route path="/equipo/:slug" element={<Layout><DoctorPage /></Layout>} />
        <Route path="/especialidades" element={<Layout><EspecialidadesPage /></Layout>} />
        <Route path="/testimonios" element={<Layout><TestimoniosPage /></Layout>} />
        <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
      </Routes>
    </>
  )
}
