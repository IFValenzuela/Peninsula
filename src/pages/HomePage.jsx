import Hero from '../components/Hero'
import CredibilityBar from '../components/CredibilityBar'
import TriageWidget from '../components/TriageWidget'
import DoctorProfiles from '../components/DoctorProfiles'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <TriageWidget />
      <DoctorProfiles />
      <Testimonials />
    </>
  )
}
