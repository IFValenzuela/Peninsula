import Header from './components/Header'
import Hero from './components/Hero'
import CredibilityBar from './components/CredibilityBar'
import TriageWidget from './components/TriageWidget'
import DoctorProfiles from './components/DoctorProfiles'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <TriageWidget />
        <DoctorProfiles />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
