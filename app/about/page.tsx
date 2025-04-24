import Header from "../components/Header"
import Footer from "../components/Footer"
import ParticleBackground from "../components/ParticleBackground"
import AboutContent from "../components/AboutContent"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
