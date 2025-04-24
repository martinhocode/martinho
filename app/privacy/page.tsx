import Header from "../components/Header"
import Footer from "../components/Footer"
import ParticleBackground from "../components/ParticleBackground"
import PrivacyContent from "../components/PrivacyContent"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  )
}
